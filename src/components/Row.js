import React, { useEffect,useState } from 'react'
import instance from '../instance'
import './Row.css'

function Row({title,fetchUrl,isPoster}) {
    const base_url = "https://image.tmdb.org/t/p/original/";   

// function fetchData(){
//   instance.get(fetchUrl)
//   .then((res)=>{
//     console.log(res);
//   }).catch((rej)=>{
//     console.log('failed');   
//   })

  
// }
const[allMovies,setAllMovies]=useState([])

// const fetchData=async()=>{
//   const {data}=await instance.get(fetchUrl)
//   setAllMovies(data.results)
  const fetchData = async () => {
    try {
      const { data } = await instance.get(fetchUrl);
      // Update the state with the fetched data
      setAllMovies(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  






  useEffect(()=>{
    fetchData()

  },[])

   
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="movies-row">
          {
            allMovies?.map((ele)=>{
              return(

                              <img className={`movie ${isPoster && 'movie-poster'}`} src={`${base_url}/${ isPoster?ele.poster_path: ele?.backdrop_path}`} alt="noImage" />

              )

            })
          }
        </div>
        
    </div>
  )
}

export default Row