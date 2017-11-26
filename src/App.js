import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Willkommen zum Brettspiel Banter Wahllokal</h1>
        </header>
        <p className="App-intro">
          Testing testing
        </p>
      </div>
    );
  }
}

export default App;
