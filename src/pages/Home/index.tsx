import React from 'react';
import logo from '../../logo.svg';
import './../../App.css';
import './style.css';

const Home = () => {
  return (
    <div>
      <div>
        <img src={logo} className='App-logo logo' alt='logo' />
        <h1>
          <a href='/users'>Consultar Lista de Usuários</a>
        </h1>
      </div>
    </div>
  );
};

export default Home;
