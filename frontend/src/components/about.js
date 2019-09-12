import React from "react"

export default class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subject: "",
      message: "",
      name: "",
      email: ""
    }
  }

  handleFormSubmit = event => {
    event.preventDefault()
    fetch("http://localhost:8080/userform", {
      method: "POST",
      headers: {
        Accept: "application/json, textplain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => {
      if (response.status === 201) {
        this.setState({
          subject: "",
          message: "",
          name: "",
          email: ""
        })
      }
    }).catch(err => {
      console.log("WRONG!", err)
    })
  }

  handleSubject = event => {
    this.setState({
    subject: event.target.value
    })
  }

  handleMessage = event => {
    this.setState({
      message: event.target.value
    })
  }

  handleName = event => {
    this.setState({
      name: event.target.value
    })
  }
  handleEmail = event => {
    this.setState({
      email: event.target.value
    })
  }

  render() {
    return (
      <div className="formbox">
        <div className="form-info">
        <h1>Who are we?</h1>
        <p>As you might have understood we like BJJ a lot. This site was made to have a library with videos and easier categorizing, where you can watch and suggest new videos to add to our library.</p>
        </div>
        <form className="userform" onSubmit={this.handleFormSubmit} >
          <h2>Contact us</h2>
          <label>
            <p>Subject</p>
            <input
              type="text"
              value={this.state.subject}
              onChange={this.handleSubject} />
          </label>
          <label>
            <p>Message</p>
            <textarea
               rows="5" cols="100"
               type="text"
               value={this.state.message}
               onChange={this.handleMessage}/>
          </label>
          <label>
            <p>Name</p>
            <input type="text"
              value={this.state.name}
              onChange={this.handleName}/>
          </label>
          <label>
            <p>Email</p>
            <input type="email"
              value={this.state.email}
              onChange={this.handleEmail} />
          </label>
          <div>
            <button className="btnstyle">Send</button>
          </div>
        </form>
      </div>
    )
  }
}
