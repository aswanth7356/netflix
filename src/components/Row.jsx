import React, { useEffect, useState } from 'react'
import instance from '../requestApi/baseUrl'
import './Row.css'

function Row({fetchUrl,title,change}) {                                     // {fetchUrl , title , change}  -->  its a destructuring method of props   (use -> aah datas kittan vendi ) , elam edukkunnath Home.jsx il ninnu
  
    const[movie,setMovie]=useState([])                                          // useState -->  consilil kittya data display avan and also return nte ullil html code koduthal mathram (useEffect okke kayinjitanu useState cheyyunnath)
    const baseUrl="https://image.tmdb.org/t/p/original/"                             // image nte base url

    const fetchMovies=async()=>{
      const out = await instance.get(fetchUrl)                                       // instance --> already intance il url fetch cheythitund (baseUrl.js)
      setMovie(out.data.results);
    }
    useEffect(()=>{
      fetchMovies()
    },[])
    // console.log(movie);

    return (
      <div className='row'>
        <h1>{title}</h1>                         
        {/* <h2>{fetchUrl}</h2> */}

        <div className='movies'>
          {
            movie.length>0?
            (
              movie.map(i=>(
                 <img src={`${baseUrl}${change?i.poster_path:i.backdrop_path}`} alt="" className='movieImage'/>
              ))
            )
            :
            <h4>Loading....</h4>
          }
        </div>
      </div>
    )
}

export default Row
