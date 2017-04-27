import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import styles from './ArtistsResultList.css';


class ArtistsResultList extends Component {
  render() {
    return (
      <div>
        <textarea id="res"></textarea>
        
      </div>
   
    )
  }




  componentDidMount() {
      console.log(JSON.parse(localStorage.artistNameList));
   for(let i = 0;i < JSON.parse(localStorage.artistNameList).artists.items.length ;i++){
     document.getElementById('res').value += JSON.parse(localStorage.artistNameList).artists.items[i].name + "\n";
    }


    //document.getElementById('res').innerHTML += localStorage.artistNameList;
  }
}





export default ArtistsResultList;
