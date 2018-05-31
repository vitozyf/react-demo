import React from 'react';
import './App.css';
import Component from  'utils/Component'
import 'utils'
import AppLayout from './layout/index'
import { Provider } from 'react-redux';
import createStore from 'src/store/index'

const store = createStore()

class App extends Component {
  // constructor () {
  //   super()
  // }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppLayout></AppLayout>
        </div>
      </Provider>
    );
  }
}

export default App;
