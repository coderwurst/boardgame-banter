import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Willkommen zum Brettspiel Banter Wahllokal
        </p>
      </div>
    );
  }
}

export default App;
