import {Component} from  'react'
import axios from 'axios'

// console.log(Component)

Component.prototype.$get = (...args) => {
  // function requestSuccess(params) {
    
  // }
  return axios.get(
    'http://localhost:3001/' + args[0],
    args[1],
    {
      // headers: {
      //   'Authorization': 'Tokenff0ce8a1-fdeb-4d17-ab25-cc7023b115da'
      // }
    }
  ).then(datas => {
    // console.log('data', datas)
    if (typeof args[1] === 'function') {
      args[1](datas.data.data)
    } else if (typeof args[2] === 'function') {
      args[2](datas.data.data)
    }
  }).catch(error => {
    if (typeof args[1] === 'function' && typeof args[2] === 'function') {
      args[2](error)
    } else if (typeof args[2] === 'function' && typeof args[3] === 'function') {
      args[3](error)
    }
  });

}
Component.prototype.$post = (...args) => {
  // function requestSuccess(params) {
    
  // }
  return axios.post(
    'http://localhost:3001/' + args[0],
    args[1],
    {
      // headers: {
      //   'Authorization': 'Tokenff0ce8a1-fdeb-4d17-ab25-cc7023b115da'
      // }
    }
  ).then(datas => {
    // console.log('data', datas)
    if (typeof args[1] === 'function') {
      args[1](datas.data.data)
    } else if (typeof args[2] === 'function') {
      args[2](datas.data.data)
    }
  }).catch(error => {
    if (typeof args[1] === 'function' && typeof args[2] === 'function') {
      args[2](error)
    } else if (typeof args[2] === 'function' && typeof args[3] === 'function') {
      args[3](error)
    }
  });

}


export default Component