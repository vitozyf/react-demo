import React from 'react'
import Component from  'utils/Component'
import Login from './Login/index'
import AboutOur from './AboutOur'
import { Button  } from 'antd';
class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      password: ''
    }

    this.myRef = React.createRef();
    this.myRef2 = React.createRef();
  }
  handlerInputChannge = (event) => {
    let inputName = event.target.name
    this.setState({
      [inputName]: event.target.value
    })
  }

  clickHandler = () => {
    console.log(this.myRef.current)
    // console.log(this.myRef2, this.myRef2.current)
  }

  render () {
    // const ref = React.createRef();
    return (
      <div>
        <Button onClick = { this.clickHandler } >首页</Button>
        <div ref = { this.myRef2 }>123</div>
        <Login ref = {this.myRef} title={123} age = {`false`} element = {AboutOur}></Login>
      </div>
      
    )
  }
}

export default Home