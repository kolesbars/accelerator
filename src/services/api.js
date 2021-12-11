import axios from 'axios';

const BACKENS_URL = 'http://localhost:3001/';

const REQUEST_TOMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKENS_URL,
    timeout: REQUEST_TOMEOUT,
  });

  return api;
};
