import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {ShoppingListDashboard} from './components/ShoppingListDashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingListDashboard />
      </div>
    );
  }
}
export default App;
