import React from 'react'
import { useState,useEffect } from 'react'
import './Navbar.css'


function Navbar() {
  const [show,setShow]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>600){
        setShow(true)
        

      }else{
        setShow(false)
      }
    })
  })
  return (
    <div className={`${show && 'nav-black'} nav`}>
      <img src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="" width={150}px />
    
    </div>
  )
}

export default Navbar