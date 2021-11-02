import { connect } from "react-redux";

function App(props) {
  // console.log(props)
  function handleIncrement() {
    props.dispatch({
      type : "increment"
    })
  }

  function handleDecrement() {
    props.dispatch({
      type : "decrement"
    })
  }

  function handleReset() {
    props.dispatch({
      type : "reset"
    })
  }
  return (
   <>
      <h1>{props.value}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
   </>
  );
}

function matpStateToProps(state) {
  return {
    value : state.value
  }
}

export default connect(matpStateToProps)(App);
