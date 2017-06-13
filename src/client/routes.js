import React from 'react';
import AppContainer from './components/app';
import { Route, IndexRoute, Redirect } from 'react-router';
import Lobby from './components/lobby';
import Game from './components/game';

export default function () {
  return(
    <Route path='/' component={AppContainer}>
      <IndexRoute components={Lobby} />
      <Route path='/game/:gameId' components={Game} />
      <Redirect from='*' to='/' />
    </Route>
  );
}
