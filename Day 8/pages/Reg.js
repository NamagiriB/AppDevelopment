import React from 'react'
import './Reg.css';
import { Link } from "react-router-dom";
export default function Reg() {
  return (
    <div className="container1">
   
    <div className="container-left1">
      <div className="wrapper-left1">
        <div className="part-one1">
          <h3>Get started</h3>
          <p>Lets create your account</p>
        </div>
        <div className="inp1">
          <form action>
            <label htmlFor className="email1">E-mail </label>
            <i className="fas fa-envelope envelope1" />
            <input className="inp-left1" type="email" placeholder="" />
            <label htmlFor className="pass1">Password </label>
            <i className="fas fa-lock pass1" />
            <input className="inp-left1" type="password" placeholder="" name id />
            <label htmlFor className="pas1">Username</label>
            <i className="fas fa-lock pass1" />
            <input className="inp-left1" type="Username" placeholder="8+ characters" name id />
            
          </form>
        </div>
        <div className="buttons1">
          <button className="btn-one1">Register</button>
          <button className="btn-two1">
            <i className="fab fa-google1" /> Sign up with google
          </button>
        </div>
        <div className="check1">
          <label htmlFor="privacy">
            I read and accept the User Agreement and <br />
            Privacy Policy.
            <input id="privacy" type="checkbox" />
            <span className="checkmark1" />
          </label>
        </div>
        <div className="down1">
          <p>Already have an account?</p>
            <Link to="/"><button className="form-input-btn2" type="submit">
                <strong>Login</strong>
              </button></Link>
        </div>
      </div>
    </div>
    {/* section-left-end */}
  </div>

  )
}
