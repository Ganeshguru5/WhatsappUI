import React from 'react'
import "../styles/chat.css"
import zip from "../assets/zip.png"
import window11 from "../assets/windows11.jpg"
import Background from "../assets/background/bgremove3.png"
import {BiVideo,BiPhoneCall,BiSearch} from "react-icons/bi"
import {AiOutlineSend,AiOutlineSmile} from "react-icons/ai"
import {GiSafetyPin} from "react-icons/gi"
import {RiCheckDoubleFill} from "react-icons/ri"


// backgroundImage: `url(${Background})`
// style={{backgroundImage:`url(${Background})`,backgroundSize:'cover'}}
export default function ChatScreen() {
  return (
    <div className='chatContainer' style={{backgroundImage:`url(${Background})`,backgroundSize:'cover'}}>
      <div className='chatHeader'>
      <div >
        <h3 style={{opacity:'none'}}>Alice Whiteman</h3>
        <p className='status'>Online</p>
      </div>
      <div className='chaticons'>
        <BiVideo className='chaticon'/>
        <BiPhoneCall className='chaticon'/>
        <BiSearch className='chaticon'/>
        <img src="https://images.squarespace-cdn.com/content/v1/53af1c83e4b0b3e1fc2000bd/1446397787787-SI1H06DNOL2QJSX13DCD/Randy+Krum+Profile+Photo+square.jpg" className="profilepic chaticon" alt='profilepic'/>
      </div>
      </div>

      <div className='Chats'>
      <p className='messagesend messageone'>Ok!<span className='timestamp'>6:00pm</span></p>
      <p className='messagereceive messageone'>Here all the backgrounds .Let me know your favorite<span className='timestamp'>6:00pm<RiCheckDoubleFill style={{marginBottom:-3}} color='skyblue' fontSize={15}/></span></p>
      <div className='messagereceive messageone'>
        <div className='zip'>
        <div style={{display:'flex',alignItems:'center'}}>
          <div>
            <img src={zip} style={{width:40}} alt="zipicon"/>
          </div>
          <div>
        <p>Backgrounds.zip</p>
        <p className='zipdes'>23.5 MB Compressed (Zipped) Folder</p>
        </div>
        </div>
        <div className='buttons'>
          <button>Open</button>
          <button>Save as..</button>
        </div>
        </div>
        <span className='timestamp'>6:00pm<RiCheckDoubleFill style={{marginBottom:-3}} color='skyblue' fontSize={15}/></span>
      </div>
      <div className='messagesend messageone'>
        <img src={window11} style={{width:400,margin:14}} alt="sentpic"/>
        <p style={{marginLeft:14}}>This is beautiful !!</p>
        <span className='timestamp'>6:00pm</span>
      </div>
      <p className='messagereceive messageone'>Yeah thats my fav too <span className='timestamp'>6:00pm<RiCheckDoubleFill style={{marginBottom:-3}} color='skyblue' fontSize={15}/></span></p>
      
      </div>

      <div className='messageBox'>
      <AiOutlineSmile fontSize={20} style={{marginLeft:20}}/>
      <GiSafetyPin fontSize={20} style={{marginLeft:20}}/>
      
        <input className='msginput' placeholder='Type a message'/>
        <AiOutlineSend fontSize={20}/>
      </div>
    </div>
  )
}
