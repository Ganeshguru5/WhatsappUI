import React from 'react'

import "../styles/singleChat.css"


export default function SingleChat(props) {
   
  return (
    <div className='chatNavcon'>
        <div className='profdiv'>
            <img src={props.URL} className="profilepic" alt='profilepic'/>
        </div>
        <div className='msgdiv'>
            <p className='name'>{props.name}</p>
            <p className='message'>{props.message.slice(0,30)+"..."}</p>
        </div>
        <div className='timediv'>
            <p className='time'>5:00</p>
            <p className='count'>1</p>
        </div>
    </div>
  )
}
