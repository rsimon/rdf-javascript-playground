import React, { Component } from 'react';
import axios from 'axios';
import rdf from 'rdflib';

import './App.css';

class App extends Component {

  componentDidMount() {
    axios.get(`${process.env.PUBLIC_URL}/themeparks.rdf`).then(response => {
      // console.log(response.data);
      const store = rdf.graph();
      rdf.parse(response.data, store, 'http://foo.bar', 'text/turtle');
      console.log(store.toNT());
    });
  }

  render() {
    return (
      <div className="App">
        Hello World
      </div>
    );
  }

}

export default App;
