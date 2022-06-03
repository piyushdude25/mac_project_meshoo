// import React from 'react'
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";

// const Try = () => {
//   const[product,setProduct]=useState([]);

//  const {id}=useParams();
//  useEffect(()=>{
//    axios.get(`https://meesho123.herokuapp.com/products/${id}`).then((response)=>{
//      console.log(response.data)
//      setProduct(...[response.data])
//    })
//  },[])


// // const Try = () => {
//   return (
//     <div>
//       details
//     </div>
//   )
// }

// export default Try


import React, { Component } from "react";
import {connect} from 'react-redux'
import {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
// import {incdirReDucer}  from '../reducers/productReducer'

 class Try extends Component{
  // const Try = () => {
  // let dispatch = useDispatch();

  // const initialState = {
  //     const  count : 0
  //     }

    increment=()=>{
      console.log("this.............",this)
      this.props.dispatch({type:"INCREMENT"})
    }
     decrement=()=>{
      this.props.dispatch({type:"DECREMENT"})
    }
  
   render()
   {
    return (
      <div>
        
         {/* <button onChange={()=> {dispatch(incdirReDucer())}}> = </button> */}
       


        <button onClick={this.decrement}> - </button>
        <span>{this.props.count}</span>
        <button onClick={this.increment}> + </button>
      </div>
    );
   }
  };  

  function maoStateToProps(state){
    return{
      count:state.count
    }
  }

 

 export default connect(maoStateToProps)(Try)

