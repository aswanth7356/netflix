import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {

    const[show,setShow]=useState(false)             //scroll avumbom backgrond color black avan

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 400){
                setShow(true)
            }else{
                setShow(false)
            }
        })
    },[])
    console.log(show);


  return (
    <div className={`nav ${show && 'navba'}`}>   
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
    </div>
  )
}

export default Navbar
