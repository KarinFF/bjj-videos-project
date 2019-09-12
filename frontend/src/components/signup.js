import React from 'react'
import { Link } from "react-router-dom"

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch("http://localhost:8080/admin", {
      method: "POST",
      headers: {
        Accept: "application/json, textplain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => {
      if (response.status === 201) {
        this.setState({
          username: "",
          password: ""
        })
      }
    })
    .then(response => alert('You are now an admin!', JSON.stringify(response)))
    .catch(err => {
      alert("WRONG!", err)
    })
  }

  handleuserName = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = event => {
    this.setState({
      password: event.target.value
    })
  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <h2>Please signup</h2>
        <label className="nameinput">
          <p>Username</p>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleuserName} />
        </label>
        <label className="passwordinput">
          <p>Password</p>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePassword} />
        </label>
        <button>Sign up</button>
      </form>
        <Link to="/admin">
        Back to log in
        </Link>
      </div>
    )
  }
}

export default Signup
