import axios from 'axios';
//Conectando a chave da api, é necessario a configuração da chave!!
export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_API,
    language: 'pt-Br',
  },
});
