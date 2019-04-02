import React from "react"

export default class About extends React.Component {

  render() {
    return (
      <div className="formbox">
        <h1>Who are we?</h1>
        <h3>We like brazilian jiu jutsu</h3>
        <form className="userform">
          <h2>Contact us!</h2>
          <label>
            <p>Subject</p>
            <input type="text" />
          </label>
          <label>
            <p>Message</p>
            <input className="message" type="text" />
          </label>
          <label>
            <p>Name</p>
            <input type="text" />
          </label>
          <label>
            <p>Email</p>
            <input type="email" />
          </label>
          <div>
            <button className="btnstyle">Send</button>
          </div>
        </form>
      </div>
    )
  }
}
