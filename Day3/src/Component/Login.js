import React from 'react'
import "../Login.css"
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="container">
   
    <div className="container-left">
      <div className="wrapper-left">
        <div className="part-one">
          <h3>Get started</h3>
          <p>Login</p>
        </div>
        <div className="inp">
          <form action>
            <label htmlFor className="email">E-mail </label>
            <i className="fas fa-envelope envelope" />
            <input className="inp-left" type="email" placeholder="mhmmd.rezaei4@gmail.com" />
            <label htmlFor className="pass">Password </label>
            <i className="fas fa-lock pass" />
            <input className="inp-left" type="password" placeholder="8+ characters, 2 numbers" name id />
          </form>
        </div>
        <div className="buttons">
          <button className="btn-one">Login 
          </button>
          <button className="btn-two">
            <i className="fab fa-google" />SignUp with google
          </button>
        </div>
        <div className="check">
          <label htmlFor="privacy">
            I read and accept the User Agreement and <br />
            Privacy Policy.
            <input id="privacy" type="checkbox" />
            <span className="checkmark" />
          </label>
        </div>
        <div className="down">
        {/* <p>Don't have an account?</p> */}
            {/* <Link to="/reg"><button className="form-input-btn2" type="submit"> */}
                {/* <strong>Register</strong> */}
              {/* </button></Link> */}
          
        </div>
      </div>
    </div>
  
  </div>
  )
}
