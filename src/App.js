import React , {useState} from 'react'; 
import './App.css';
import { connect } from 'react-redux';


function App(props) {

  // const [amount, setAmount] = useState(100000)

  // const onDeposit = () => {
  //   setAmount(amount + 10000)
  // }

  // const onWithdraw = () => {
  //   setAmount(amount - 10000)
  // }



  return (
    <div className="App">
      <p>Amount : {props.amount}</p>
      <button onClick={props.onDeposit}>Deposit</button>
      <button onClick={props.onWithdraw}>Withdraw</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    amount:state.amount
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onDeposit: () => dispatch ({type:"INCREMENT",value:10000}),
    onWithdraw: () => dispatch ({type: "DECREMENT" , value:10000})
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
