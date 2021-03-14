import Contacts from './contacts.json';
import React from 'react';
import People from './Components/People';
import './App.css';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <People></People>

      </div>
    );
  }
}

export default App;
