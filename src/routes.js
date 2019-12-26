import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Posts from './pages/Posts';
import DigimonCards from './pages/DigimonCards';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Posts" component={Posts} />
        <Route path="/digimon" component={DigimonCards} />
      </Switch>
    </BrowserRouter>
  );
}
