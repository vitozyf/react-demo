import React from 'react';
import CreatRouter from  './router'
import './App.css';
import Component from  'utils/Component'
import './utils/antd'

class App extends Component {
  constructor () {
    super()
    this.$post('UserResource/GetPageModuls', {
      PageCode: 'VStock'
    }, (res) => {
      console.log(res)
    })
  }
  render() {
    return (
      <div className="App">
        <CreatRouter></CreatRouter>
      </div>
    );
  }
}

export default App;
