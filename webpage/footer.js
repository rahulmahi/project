import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div>
            <h1>petercoin</h1>

            <p>Follow Us</p>
            <span>
            <i class="fa fa-facebook-square" aria-hidden="true"></i>
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
            </span>
        </div>
        <div>
            <h2>quick links</h2>
            <p>Home</p>
            <p>About PTTN</p>
            <p>Get App</p>
            <p>Log In</p>
            <p>Register</p>
        </div>
        <div>
            <h2>Community</h2>
            <p>PTTNSupport</p>
            <p>open search</p>
            <p>exchange</p>
        </div>
        <div>
            <h2>support</h2>
            <p>FAQ's</p>
            <p>public policy</p>
            <p>Get In Touch</p>
        </div>
        <div>
            <h2>Suscribe Us</h2>
            <p>Stay connected with beledx</p>
            <input type={'text'} />
            <button>Suscribe</button>
        </div>
    </div>
  )
}

export default Footer