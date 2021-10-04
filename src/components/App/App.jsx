import { Switch, Route } from 'react-router';
import AppBar from 'components/AppBar/AppBar';
import HomeView from 'views/HomeView/HomeView';
import MoviesView from 'views/MoviesView/MoviesView';

import { Container } from './App.styled';

function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/movies">
          <MoviesView />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
