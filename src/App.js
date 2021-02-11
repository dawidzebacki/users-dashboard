import React, { useEffect } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  asyncFetchUsers
} from './store/usersSlice';

import ApiError from './components/API_Error/API_Error';
import Home from './pages/Home/Home';
import Form from './components/Form/Form';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(asyncFetchUsers());
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <ApiError />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/edit/:id" component={Form} exact />
          <Route path="/add" component={Form} exact />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
