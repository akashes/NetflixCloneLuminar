import React, { useEffect } from 'react'
import axios from 'axios';


function Ajax1() {

   function fetchData(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        console.log(res.data);
    }).catch((rej)=>{
        console.log('failed');
    })

   }
   useEffect(()=>{
    fetchData()

   },[])
  return (
    <div>Ajax1</div>
  )
}

export default Ajax1