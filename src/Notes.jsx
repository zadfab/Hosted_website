import React,{useState} from 'react';
import './App.css'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
const Notes = (props)=>{

    
    const deleltenote = ()=>{

        props.ondelete(props.id)
    }

   
    
  return(

    <>
    
    <div className='result' >
        <h2 style={{marginTop:'10%'}}>{props.new_task.title}</h2>
        
        <h3 >{props.new_task.content}</h3><Button onClick={deleltenote} ><DeleteIcon/></Button>
        
        
        </div></>
  )
}

export default Notes