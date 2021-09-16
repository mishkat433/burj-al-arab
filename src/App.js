import React, { createContext, useState } from 'react';
import Header from './components/Header/Header.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Book from './components/Book/Book.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.js';

export const userContex = createContext()

const App = () => {

  const [loginUser, setLoginUser] = useState({})

  return (
    <userContex.Provider value={[loginUser, setLoginUser]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/book/:bedType">
          <Book></Book>
          </PrivateRoute>
      </Switch>
    </Router>
    </userContex.Provider>
  );
};

export default App;