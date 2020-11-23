import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import AddLocation from './components/AddLocation';
import Reviews from './components/Reviews';
import Search from './components/Search';
import MyYelp from './components/MyYelp';
import './App.css';
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' render={props => <Home {...props} />}>
        </Route>
        <Route path='/login' >
          <Login />
        </Route>
        <Route path='/add' render={props => <AddLocation {...props} />}>
        </Route>
        <Route path='/update' render={props => <AddLocation updated = "true" {...props} />}>
        </Route>
        <Route exact path='/business' render={props => <Reviews {...props} />}>
        </Route>
        <Route path='/search' >
          <Search />
        </Route>
        <Route path='/yelp' >
          <MyYelp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
