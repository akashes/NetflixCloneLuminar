import React from 'react'
import { useState,useEffect } from 'react'
import instance from '../instance'
import './Banner1.css'

function Banner({fetchUrl}) {
  const [movie,setMovie]=useState({})
    const base_url = "https://image.tmdb.org/t/p/original/"; 
  
const fetchData=async()=>{
  const {data}=await instance.get(fetchUrl)
  setMovie(data.results[Math.floor(Math.random()*data.results.length)])
  // let res =Math.floor(Math.random()*movie.length)
  
}
console.log(movie);

useEffect(()=>{
  fetchData()
},[])

  return (
  <div>
      <div style={{
      height:'600px',
      backgroundImage:`url(${base_url}/${movie?.backdrop_path})`,
      backgroundSize:'cover',
      backgroundAttachment:'fixed'
    }}>
   
    </div>
    <div className="banner-content">
      <h1>{movie?.name}</h1>
      <h2> {movie?.overview?.slice(0,200)}... </h2>
      
    </div>
  </div>
  )
}

export default Banner