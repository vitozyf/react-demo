import React from 'react'
import Component from  'utils/Component'
import Login from './Login/index'
import AboutOur from './AboutOur'
import { Button  } from 'antd';
import Counter from 'components/Counter/Counter'
import createStore from 'src/store/index'
// import { createStore } from 'redux'
// import counter from 'src/store/reducers'

const store = createStore()

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      count: 0,
      user: store.getState().users.isFetching + ''
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
    store.dispatch({ type: 'INCREMENT' })
    console.log(this)
  }

  componentDidMount () {
    const { store } = this.context;

    console.log(123, store, this)
  }
  
  componentWillMount () {
    store.subscribe(() => {
      console.log('subscribe', store.getState())
      this.setState({
        count: store.getState().count,
        user: store.getState().users.isFetching + ''
      })
    })
  }
  

  render () {
    // const ref = React.createRef();
    return (
      <div>
        <Counter
          value={this.state.count}
          onIncrement={this.clickHandler}
          onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />
        <Button onClick={() => {store.dispatch({ type: 'CHANGEUSER'} )}}>首页{this.state.user}</Button>
        <div ref = { this.myRef2 }>123</div>
        <Login ref = {this.myRef} title={123} age = {`false`} element = {AboutOur}></Login>
      </div>
    )
  }

}

export default Home