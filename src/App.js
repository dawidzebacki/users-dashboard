import React, { useEffect } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  asyncFetchUsers
} from './store/usersSlice';

import './App.css';

import ApiError from './components/API_Error/API_Error';
import Home from './pages/Home/Home';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(asyncFetchUsers());

  }, []);

  return (
    <main className="app-container">
      <ApiError />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
