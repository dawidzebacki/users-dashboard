import React from 'react';

import UsersList from '../../components/UsersList/UsersList';
import AddUser from '../../components/AddUser/AddUser';
import Title from '../../components/Title/Title';

const Home = () => {

  return (
    <div className="wrapper">
      <Title title={'User list'} />
      <AddUser />
      <UsersList />
    </div>
  );
}

export default Home;
