import React, { Component } from 'react';
import {createStore} from 'redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Header from '../../components/Header/Header';
import InputSearch from '../../components/InputSearch/InputSearch';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Title texts="Sfotify" styleName="text-color-white" />
        <InputSearch />
        <Subtitle />
      </div>
    );
  }
}

export default Home;
