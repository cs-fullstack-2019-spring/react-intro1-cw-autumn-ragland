import React, { Component } from 'react';
import './App.css';
//import component
import BankAccount from './BankAccount'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*call component and pass props*/}
          <BankAccount customerName={'Autumn'} balance={'100'}/>
        </header>
      </div>
    );
  }
}

export default App;
