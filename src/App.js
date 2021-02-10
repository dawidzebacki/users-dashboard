import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  asyncFetchUsers
} from './store/usersSlice';

import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(asyncFetchUsers());

  }, []);

  return (
    <main className="app-container">
      hello world
    </main>
  );
}

export default App;
