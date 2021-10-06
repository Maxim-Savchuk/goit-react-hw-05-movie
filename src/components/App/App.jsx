import { lazy, Suspense } from "react";
import { Switch, Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from 'components/AppBar/AppBar';
import { LoaderSpinner } from 'components/Loader/Loader';

import { Container } from './App.styled';

const HomePage = lazy(() => import('pages/HomePage/HomePage' /* webpackChunkName: 'HomePage' */));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage' /* webpackChunkName: 'MoviesPage' */));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: 'MovieDetailsPage' */));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage' /* webpackChunkName: 'NotFoundPage' */));


function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer autoClose={2000} />
    </Container>
  );
}

export default App;
