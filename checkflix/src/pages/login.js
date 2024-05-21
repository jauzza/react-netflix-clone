import React from 'react';
import '../login.css';
import { Link } from "react-router-dom";


 function Login (){
    return (
        <>
        {/* login */}
        <div className="login-background"> {/* Apply the login-background class here */}
        <nav>
          <a href="#">
          </a>
        </nav>
        <div className="form-wrapper">
          <h2>Sign In</h2>
          <form action="#">
            <div className="form-control">
              <input type="text" required="" />
              <label>Email or phone number</label>
            </div>
            <div className="form-control">
              <input type="password" required="" />
              <label>Password</label>
            </div>
            <button type="submit"><Link to="/movie">
                  Sign In
                </Link></button>
            <div className="form-help">
              <div className="remember-me">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <a href="#">Need help?</a>
            </div>
          </form>
          <p>
            New to Netflix? <a href="#">Sign up now</a>
          </p>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <a href="#">Learn more.</a>
          </small>
        </div>
        </div>
      </>
    )
}
export default Login