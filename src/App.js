import React from 'react';
// import logo from './logo.svg';
import CreatRouter from  './router'
import './App.css';
import Component from  'utils/Component'


class App extends Component {
  constructor () {
    super()
    this.$post('https://api.douban.com/v2/movie/subject/1764796', {
      'Access-Control-Allow-Origin': 'movie_basic_r'
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
