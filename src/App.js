import React, { Component } from 'react';
import axios from 'axios';
import rdf, { Namespace } from 'rdflib';

import './App.css';

const props = Namespace('http://www.wikidata.org/prop/');
const wd = Namespace('http://www.wikidata.org/entity/');

class App extends Component {

  componentDidMount() {
    axios.get(`${process.env.PUBLIC_URL}/themeparks.ttl`).then(response => {

      // Create the store and load the RDF
      const store = rdf.graph();
      rdf.parse(response.data, store, 'http://localhost/#', 'text/turtle');
      
      // console.log(store.toNT());

      // Match every triple "* instanceOf amusementPark"
      const ids = store.match(null, props('P31'), wd('Q194195'));
      const parks = ids.map(id => {
        return store.connectedStatements(id.subject);
      });

      console.log(parks);
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
