import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/index';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="https://finception.in/static/images/nav_logo.svg" alt="" />
        <h3>Task Management</h3>
      </header>
      <Main />
    </div>
  );
}

export default App;
