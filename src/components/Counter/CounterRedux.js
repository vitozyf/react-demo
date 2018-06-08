import Counter from './Counter'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  
}

const CounterRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)