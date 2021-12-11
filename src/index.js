import { StrictMode } from 'react';
import { render } from 'react-dom';
import { createAPI } from 'services/api';
import App from 'components/app/app';

const api = createAPI();

render(
  <StrictMode>
    <App api={api} />
  </StrictMode>,
  document.getElementById('root'),
);
