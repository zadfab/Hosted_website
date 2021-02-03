import React from 'react';
import './App.css'

const Foooter = ()=>{
    const year = new Date().getFullYear()
  return(

    <><footer className='foot'>Copyright  © {year} </footer></>
  )
}

export default Foooter