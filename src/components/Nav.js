import React from 'react'
import SingleChat from './SingleChat'
import "../styles/Nav.css"
import {FiSettings} from 'react-icons/fi'
import {AiOutlinePlus} from 'react-icons/ai'
import UserData from '../Data/User'

export default function Nav() {

  return (
    <div className='Nav'>
        <span style={{fontSize:14,fontWeight:'bold'}}>Whatsapp Beta</span>
        <div className='title'>
            <p className='chattit'>Chats</p>
            <div className='navicons'>
                <p><AiOutlinePlus fontSize={20}/></p>
                <p className='settings'><FiSettings  fontSize={20}/></p>
            </div>
        </div>
        <div className='search'>
        <input  placeholder='Search or start a new chat'  className="input"/>
        </div>
        <div className='Allchats'>
        {
            UserData.map((item,index)=>{
                return(
                    <SingleChat name={item.name} message={item.message} URL={item.URL}/>  
                )
            })
        }
        </div>
        
    </div>
  )
}
