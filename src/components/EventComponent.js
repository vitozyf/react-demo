import React, { Component } from 'react'
import {Button} from 'antd';

export default class EventComponent extends Component{
  constructor(props) {
    super(props);

    this.state = {
      content: '我是切换之前',
      otherContent: '其他内容'
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  
  clickHandler(event) {
    this.setState({content: '那我就是切换之后了'})
  }

  testBindThis = () => {
    console.log('test-bind-this', this)
  }

  render () {
    return (
      <div className="EventComponent">
        <button onClick={this.clickHandler}>点击我</button>
        <div onClick={this.testBindThis}>{this.state.content}</div>
        <div>{this.state.otherContent}</div>
        <div>{this.props.name}</div>
        <Button>这是一个按钮</Button>
      </div>
    )
  }
}