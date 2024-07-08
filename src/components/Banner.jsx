import React, { useEffect, useState } from 'react'
import instance from '../requestApi/baseUrl'
import './Banner.css'


function Banner({fetchUrl}) {

    const[banner,setBanner]=useState([])
    const baseUrl="https://image.tmdb.org/t/p/original/"

    const fetchmovie=async()=>{
      const result = await instance.get(fetchUrl)
      setBanner(result.data.results [Math.floor([Math.random()*result.data.results.length])]);                                //Math.Random -> Random data kittan
    }

    useEffect(()=>{
        fetchmovie()
    },[])
    console.log(banner);

  return (
    <div className='banner' style={{backgroundImage:`url(${baseUrl}${banner.backdrop_path})`}}>
        <div>   
            <h1 className='title'>{banner.title?banner.title:banner.name}</h1>
            <p>{banner.overview}</p>
        </div>
    </div>
  )
}

export default Banner
