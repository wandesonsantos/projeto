import * as TYPES from './types';
import tmdbAPI from '../api/tmdb';
import history from '../history';

// para iniciar
export const init = () => async dispatch => {
  dispatch({ type: TYPES.SET_LOADING });
  await dispatch(getConfig());
  await dispatch(getGenres());
  dispatch({ type: TYPES.REMOVE_LOADING });
};

// Obetendo configurações da apI
export const getConfig = () => async dispatch => {
  const res = await tmdbAPI.get('/configuration');
  dispatch({
    type: TYPES.GET_CONFIG,
    payload: res.data,
  });
};

// receber generos da api
export const getGenres = () => async dispatch => {
  const res = await tmdbAPI.get('/genre/movie/list');
  dispatch({
    type: TYPES.GET_GENRES,
    payload: res.data,
  });
};

// Fazendo a validação
export const setSelectedMenu = name => (dispatch, getState) => {
  const { staticCategories, genres } = getState().geral;
  if (!name) {
    dispatch({ type: TYPES.REMOVE_SELECTED_MENU });
  } else if (
    staticCategories.find(category => category === name) ||
    genres.find(genre => genre.name === name)
  ) {
    dispatch({
      type: TYPES.SELECTED_MENU,
      payload: name,
    });
  } else {
    history.push(process.env.PUBLIC_URL + '/404');
  }
};

// Receber filmes por genero selecionado
export const getMoviesGenre = (name, page, sort) => async (
  dispatch,
  getState
) => {
  const { selected, genres } = getState().geral;
  if (!selected) {
    return;
  }
  try {
    dispatch({ type: TYPES.FETCH_MOVIES_LOADING });
    const genreId = genres
      .filter(el => el.name === name)
      .map(el => el.id)
      .join('');
    const res = await tmdbAPI.get('/discover/movie', {
      params: {
        with_genres: genreId,
        page,
        sort_by: sort,
      },
    });
    await dispatch({
      type: TYPES.FETCH_MOVIES_GENRE,
      payload: res.data,
    });
    dispatch({ type: TYPES.FETCH_MOVIES_FINISHED });
  } catch (err) {
    dispatch({ type: TYPES.INSERT_ERROR, payload: err.response });
    history.push(process.env.PUBLIC_URL + '/error');
  }
};

// Filmes por nome
export const getMoviesDiscover = (name, page) => async (dispatch, getState) => {
  const { selected } = getState().geral;
  if (!selected) {
    return;
  }
  try {
    dispatch({ type: TYPES.FETCH_MOVIES_LOADING });
    const res = await tmdbAPI.get(`/movie/${name}`, {
      params: {
        page,
      },
    });
    await dispatch({
      type: TYPES.FETCH_MOVIES_DISCOVER,
      payload: res.data,
    });
    dispatch({ type: TYPES.FETCH_MOVIES_FINISHED });
  } catch (err) {
    dispatch({ type: TYPES.INSERT_ERROR, payload: err.response });
    history.push(process.env.PUBLIC_URL + '/error');
  }
};

// Pesquisa 
export const getMoviesSearch = (query, page) => async dispatch => {
  try {
    dispatch({ type: TYPES.FETCH_MOVIES_LOADING });
    const res = await tmdbAPI.get(`/search/movie`, {
      params: {
        query,
        page,
      },
    });
    await dispatch({
      type: TYPES.FETCH_MOVIES_SEARCH,
      payload: res.data,
    });
    dispatch({ type: TYPES.FETCH_MOVIES_FINISHED });
  } catch (err) {
    dispatch({ type: TYPES.INSERT_ERROR, payload: err.response });
    history.push(process.env.PUBLIC_URL + '/error');
  }
};

// 
export const clearMovies = () => {
  return {
    type: TYPES.FETCH_MOVIES_LOADING,
  };
};

// Encontrando um filme 
export const getMovie = id => async dispatch => {
  try {
    dispatch({ type: TYPES.FETCH_MOVIE_LOADING });
    const res = await tmdbAPI.get(`/movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    });
    await dispatch({
      type: TYPES.FETCH_MOVIE,
      payload: res.data,
    });
    await dispatch(getCredits());
    dispatch({ type: TYPES.FETCH_MOVIE_FINISHED });
  } catch (err) {
    dispatch({ type: TYPES.INSERT_ERROR, payload: err.response });
    history.push(process.env.PUBLIC_URL + '/error');
  }
};

// validação
export const clearMovie = () => {
  return {
    type: TYPES.FETCH_MOVIE_LOADING,
  };
};

// informaçoes sobre o filme
export const getCredits = () => async (dispatch, getState) => {
  const { id } = getState().movie;

  try {
    const res = await tmdbAPI.get(`/movie/${id}/credits`);
    dispatch({
      type: TYPES.FETCH_CAST,
      payload: res.data.cast,
    });
  } catch (err) {
    dispatch({ type: TYPES.INSERT_ERROR, payload: err.response });
    history.push(process.env.PUBLIC_URL + '/error');
  }
};

// recomendaç~´ao baseado no filme escolhido
export const getRecommendations = (id, page) => async dispatch => {
  try {
    dispatch({ type: TYPES.FETCH_RECOMMENDATIONS_LOADING });
    const res = await tmdbAPI.get(`/movie/${id}/recommendations`, {
      params: {
        page,
      },
    });
    await dispatch({
      type: TYPES.FETCH_RECOMMENDATIONS,
      payload: res.data,
    });
    dispatch({ type: TYPES.FETCH_RECOMMENDATIONS_FINISHED });
  } catch (err) {
    dispatch({ type: TYPES.INSERT_ERROR, payload: err.response });
    history.push(process.env.PUBLIC_URL + '/error');
  }
};

// validação
export const clearRecommendations = () => {
  return {
    type: TYPES.FETCH_RECOMMENDATIONS_LOADING,
  };
};




export const clearError = () => ({ type: TYPES.CLEAR_ERROR });
