import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';

// import sheetsConfig from './config/sheetsConfig';

// components
import BoardgameTable from './components/BoardgameTable';
import ReactGoogleSheetConnector from "react-google-sheet-connector"

class App extends Component {
  render() {
    console.log("test:" + process.env.REACT_APP_apiKey);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Willkommen zum Brettspiel Banter</h1>
        </header>
        <div class="table-wrapper">
          <ReactGoogleSheetConnector
              apiKey={process.env.REACT_APP_apiKey}
              clientid={process.env.REACY_APP_clientId}
              spreadsheetId={process.env.REACT_APP_spreadsheetId}
              spinner={ <div className="loading-spinner"/> } >
              <BoardgameTable></BoardgameTable>
          </ReactGoogleSheetConnector>
        </div>
        <div className="App-footer">
          <h4>black coffee studios 2018</h4>
        </div>
      </div>
    );
  }
}

export default App;
