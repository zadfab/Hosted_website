import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const Text_box = (props)=>{

    const [current_text,update_text] = useState({title:'',content:''});
    const [show,update_show] = useState(false);

    

    const title = (e)=>{
        const {name,value} = e.target
        update_text((prev_data)=>{
                return{
                    ...prev_data,
                    [name]:value
                 }
        }    
        )
    }

    const add= (e)=>{
       props.send_task(current_text)
       update_text(()=>{
           return{
           title:'',
           content:''}
       })
        
    }

    const display = ()=>{
        update_show(()=>{
            return(true)
        
    })}

    const hide = ()=>{
        update_show(()=>{
            return(false)
        })
    }


  return(

    <>
    <div className='text_box' onDoubleClick={hide}>
        <h2 style={{marginTop:"5%"}}>Your Task</h2>
      
        <input type='text' name='title' value={current_text.title} placeholder='Your Title' onChange={title} onClick={display}/>
        {show ?<input type='text' name = 'content' placeholder='Your Task' value={current_text.content} onChange={title}/>:null}
        {show ?<Button  onClick={add}><AddIcon className='but'/></Button>:null}
    </div>
    
    </>
  )
}

export default Text_box;

