import React , {useState} from 'react'; 
import './App.css';
import { connect } from 'react-redux';
import Home from './Home';
import { useSelector, useDispatch } from "react-redux";


function App(props) {

  // const [amount, setAmount] = useState(100000)

  // const onDeposit = () => {
  //   setAmount(amount + 10000)
  // }

  // const onWithdraw = () => {
  //   setAmount(amount - 10000)
  // }

  const [name , setName] = useState('')
  const dispatch = useDispatch();


  return (
    <div className="App">
      <Home/>
      <p>Amount : {props.amount}</p>
      <button onClick={props.onDeposit}>Deposit</button>
      <button onClick={props.onWithdraw}>Withdraw</button>
      <input value={name} onChange={(e)=>{
        
        dispatch ({type:"Name",value:e.target.value,age:21})
        setName(e.target.value)
      }} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    amount:state.amount,
    name:state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onDeposit: () => dispatch ({type:"INCREMENT",value:10000}),
    onWithdraw: () => dispatch ({type: "DECREMENT" , value:10000}),
    // eslint-disable-next-line no-restricted-globals
    onValueChange:()=> dispatch ({type:"ONCHANGENAME",value:name})
    
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
