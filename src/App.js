import React from 'react';
import './App.css';
import Component from  'utils/Component'
import 'utils'
import AppLayout from './layout/index'

class App extends Component {
  // constructor () {
  //   super()
  // }
  render() {
    return (
      <div className="App">
        <AppLayout></AppLayout>
      </div>
    );
  }
}

export default App;
