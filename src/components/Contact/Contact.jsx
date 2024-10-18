import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div id='cme'>
      <div id="c1"></div>
      <div id="c2"></div>
      <div id="box">
        <div className="divo" id="div1">
          <form>
            <label htmlFor="email">Email-ID:</label><br />
            <input autoComplete="off" type="text" id="email" name="email" /><br />
          </form>
        </div>
        <div className="divo" id="div2">
          <form>
            <label htmlFor="password">Message:</label><br />
            <input autoComplete="off" type="password" id="password" name="password" /><br />
          </form>
        </div>
        <div id="div3">
          {/* <p>Register</p>
          <p>Forgot Password?</p> */}
        </div>
        <button><h4>Send Msg</h4></button>
      </div>
      </div>
    </>
  );
}

export default Contact;
