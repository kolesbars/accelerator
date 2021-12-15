import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import NotFoundScreen from 'components/not-found-screen/not-found-screen';
import { appTheme } from './common';
import { AppRoute } from 'const';
import * as S from './app.styled';

const App = ({ api }) => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={`${AppRoute.DetailedQuest}/:id`}>
          <DetailedQuest api={api} />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route exact path={AppRoute.Home}>
          <Home api={api} />
        </Route>
        <Route>
          <NotFoundScreen path={AppRoute.NotFoundScreen} />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
