import React from 'react'
import { connect } from 'react-redux';


const Home = (props) => {
  return (
    <div>
        <h1>Name : {props.name}</h1>
      <h1>Ammount : {props.amount}</h1>
      <h3>Age : {props.age}</h3>
    </div>
  )
}
const mapStateToProps = (state) => {
    return{
      amount:state.amount,
      name:state.name,
      age:state.age
    }
  }


  

export default connect(mapStateToProps) (Home)
