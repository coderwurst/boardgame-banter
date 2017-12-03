import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';

import sheetsConfig from './config/sheetsConfig';

// components
import BoardgameTable from './components/BoardgameTable';
import ReactGoogleSheetConnector from "react-google-sheet-connector"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Willkommen zum Brettspiel Banter</h1>
        </header>
        <div class="table-wrapper">
          <ReactGoogleSheetConnector
              apiKey={sheetsConfig.apiKey}
              clientid={sheetsConfig.clientid}
              spreadsheetId={sheetsConfig.spreadsheetId}
              spinner={ <div className="loading-spinner"/> } >
              <BoardgameTable></BoardgameTable>
          </ReactGoogleSheetConnector>
        </div>
        
      
      </div>
    );
  }
}

export default App;
