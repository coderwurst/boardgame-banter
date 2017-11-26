import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';

// components
import BoardgameTable from './components/BoardgameTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Willkommen zum Brettspiel Banter Wahllokal</h1>
        </header>
        <BoardgameTable></BoardgameTable>
      </div>
    );
  }
}

export default App;
