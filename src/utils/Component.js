import {Component} from  'react'
import axios from 'axios'

// console.log(Component)

Component.prototype.$post = (...args) => {
  return axios.get(args[0],args[1]).then((res) => {
    return args[2](res)
  })
}


export default Component