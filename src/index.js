import { StrictMode } from 'react';
import { render } from 'react-dom';
import { createAPI } from 'services/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from 'components/app/app';

const api = createAPI();

render(
  <StrictMode>
    <ToastContainer />
    <App api={api} />
  </StrictMode>,
  document.getElementById('root'),
);
