import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from '../history';
import { connect } from 'react-redux';
import { init } from '../actions';

import Category from './Category';
import Discover from './Discover';
import Genre from './Genre';
import Search from './Search';
import Movie from './Movie';

import Login from '../components/Login';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowLeft,
  faArrowRight,
  faHome,
  faCalendar,
  faPoll,
  faHeart,
  faDotCircle,
  faStar as fasFaStar,
  faSearch,
  faChevronRight,
  faChevronLeft,
  faLink,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

library.add(
  fab,
  faArrowLeft,
  faArrowRight,
  faHome,
  faCalendar,
  faPoll,
  faHeart,
  faDotCircle,
  fasFaStar,
  farFaStar,
  faSearch,
  faChevronRight,
  faChevronLeft,
  faLink,
  faPlay
);

const MainWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  user-select: none;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 4rem;

  @media ${props => props.theme.mediaQueries.larger} {
    padding: 6rem 3rem;
  }

  @media ${props => props.theme.mediaQueries.large} {
    padding: 4rem 2rem;
  }
`;

const SearhBarWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem;
`;

const App = ({ init, isLoading }) => {
  useEffect(() => {
    init();
  }, []);



  return isLoading ? (
    <ContentWrapper>
    </ContentWrapper>
  ) : (
    <Router history={history}>
      <React.Fragment>

        <Navbar />

        <MainWrapper>

          <SearhBarWrapper>
            <SearchBar />
          </SearhBarWrapper>

          <ContentWrapper>
            <Switch>

              <Route
                path={process.env.PUBLIC_URL + '/'}
                exact
                render={() => (
                  <Redirect
                    from={process.env.PUBLIC_URL + '/'}
                    to={process.env.PUBLIC_URL + '/discover/Popular'}
                  />
                )}
              />
              <Route
                path={process.env.PUBLIC_URL + '/genres/:name'}
                exact
                component={Genre}
              />

              <Route
                path={process.env.PUBLIC_URL + '/Category'}
                exact
                component={Category}
              />
              <Route
                path={process.env.PUBLIC_URL + '/Login'}
                exact
                component={Login}
              />
              <Route
                path={process.env.PUBLIC_URL + '/registrar'}
                exact
                component={Login}
              />

              <Route
                path={process.env.PUBLIC_URL + '/discover/:name'}
                exact
                component={Discover}
              />
              <Route
                path={process.env.PUBLIC_URL + '/search/:query'}
                exact
                component={Search}
              />
              <Route
                path={process.env.PUBLIC_URL + '/movie/:id'}
                exact
                component={Movie}
              />



            </Switch>
          </ContentWrapper>

        </MainWrapper>

      </React.Fragment>

    </Router>
  );
};

const mapStateToProps = ({ geral }) => {
  return { isLoading: geral.loading };
};

export default connect(
  mapStateToProps,
  { init }
)(App);
