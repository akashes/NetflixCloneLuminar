import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Example() {
    const[state,setState]=useState([])


useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        setState(res.data)
    }).catch((rej)=>{
        console.log('failed');
    })

},[])

  return (
    <>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
            </tr>
        </thead>
        <tbody>
            {
                state.map((ele)=>{
                    return(
                        <tr>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </>
  )
}

export default Example