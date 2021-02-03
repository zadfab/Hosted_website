import React from 'react';
import './App.css'

const Header = (props)=>{
  return(

    <>
    <div className='head'><pre>
    <img width='90' style={{float:'left'}}  src={props.logo} alt='Logo'/>  <h1 style={{marginLeft:'100px'}} >Google Notes</h1></pre>
    </div>
    </>
  )
}

export default Header