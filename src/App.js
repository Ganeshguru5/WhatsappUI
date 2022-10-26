import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Nav from './components/Nav'
import ChatScreen from './screens/ChatScreen'

export default function App() {
  return (
    <div className='main'>
      <Router>
        <Nav />
          <Routes>
            <Route exact path='/' element={<ChatScreen />}/>
          </Routes>
      </Router>
    </div>
  )
}
