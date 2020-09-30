import React from 'react';
import Counter from './features/counter/Counter';
import DisplayCounter from './features/counter/DisplayCounter';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Counter}></Route>
          <Route path="/counter" exact>
            <DisplayCounter />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
