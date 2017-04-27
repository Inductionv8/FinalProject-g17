import React, { Component } from 'react';
import { createStore } from 'redux'
import axios from 'axios'

import styles from './InputSearch.css';

class InputSearch extends Component {
  render() {
    return (
      <div>
        <button id="getArtistName">Search an artist</button>
        <input type="text" id="inputSearch" placeholder="Search the name of your favorite artist">
        </input>
        <textarea id="searchResult"></textarea>
      </div>
    )
  }
}



function counter(state = "?", action) {
  switch (action.type) {

  case 'getArtista':
     axios.get(action.payload)
      .then((response) => { 
        //console.log(response.data.name);
        store.dispatch({ type: 'showArtista',payload: response.data })
         
      })
     return state;


   case 'showArtista':
   //document.getElementById('inputSearch').value = action.payload;
    
    for(let i = 0;i < action.payload.artists.items.length;i++){
     document.getElementById('searchResult').value += action.payload.artists.items[i].name + "\n";
    }
    
   
   return action.payload

  
  default:
    return state
  }
}

let store = createStore(counter)

store.subscribe(() =>
  console.log(store.getState())
)
 
// The only way to mutate the internal state is to dispatch an action. 
// The actions can be serialized, logged or stored and later replayed. 
window.onload = function(){

document.getElementById('getArtistName')
      .addEventListener('click', function() {
       let search = document.getElementById('inputSearch').value;
       if(search != "")
       {   
          search.replace(/ /g,"+");
          store.dispatch({ type: 'getArtista',payload: "https://api.spotify.com/v1/search?q="+search+"&type=artist" })
       }
         
      })


};







export default InputSearch;
