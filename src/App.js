import React,{useState} from 'react';
import Header from './Header';
import Foooter from './Footer';
import Notes from './Notes';
import Text_box from './Text_box';
import Logo from './imgs/logo.jpg'

const App = ()=>{
  const [current_list,update_list] = useState([])

  const card_fun = (current_task)=>{
    update_list((prev_list)=>{
        return([...prev_list,current_task])
    })
 
  }
  
  const delete_fun = (id)=>{
    update_list((arr)=>{
      return(
      arr.filter((i,indx)=>{
          return  indx !== id
      }))
    }

    )}
  return(
    
    <><Header logo={Logo}/>
    
    <Text_box send_task = {card_fun}/>
    {current_list.map((task,index)=>{
      return(<Notes key={index} id={index} new_task={task} ondelete={delete_fun}/>)
    })
      

     }
    
    <Foooter/>

    </>
  )
}

export default App