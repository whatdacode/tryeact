import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input type="text"/>
          </form>
        </div>
        <div className="Todo-List">
          <ul>
            <li><input type="checkbox"/>List 1</li>
            <li><input type="checkbox"/>List 2</li>
            <li><input type="checkbox"/>List 3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
