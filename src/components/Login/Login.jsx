import React, { Component } from 'react'
import { Input, Row, Col, Button  } from 'antd';
import PropTypes from 'prop-types';
import './style/index.css';

class Login extends Component {
  static defaultProps = {
    address: '深圳'
  }

  constructor (props) {
    super(props);
    this.state = {
      name: 'zhangsan'
    }
    this.ref = React.createRef();
  }

  componentDidMount () {
    console.log('123', this)
  }
  render (h) {
    // const ref = React.createRef();
    return (
      <div ref = { this.ref } data-name="abc">
        <Row>{ this.props.title }</Row>
        <Row>{ this.props.age }</Row>
        <Row>{ this.props.address } </Row>
        <Row>
          <Col span={6}> 
            <Input placeholder="用户名" name="userName" onChange={this.handlerInputChannge}/>
          </Col>
        </Row>

        <Row>
          <Col span={6}>
            <Input placeholder="密码" name="password" type="password" onChange={this.handlerInputChannge}/>
          </Col>
        </Row>

        <Row>
          <Col span={6}>
            <Button type="primary" onClick={this.loginHandler}>Login</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

Login.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  age: PropTypes.string.isRequired,
  address: PropTypes.string
}

// Login.defaultProps = {
//   address: '深圳'
// }

export default Login