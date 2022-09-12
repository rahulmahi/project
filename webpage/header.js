import React from 'react'
import './headerBar.css'

function HeaderBar(){
  return (
    <div className='parent'>
        <div>
           <img src={require('../')} />
           <span>pattern coin</span>
        </div>
        <div className='line'>
           <span style={{color:'blue'}}>Home</span>
           <span>About</span>
           <span>FAQ</span>
           <span>Listed In</span>
           <span>Contacts</span>
           <button className='log'>Log In</button>
           <button className='btn'>Register</button>
        </div>
    </div>
  )
}

export default HeaderBar