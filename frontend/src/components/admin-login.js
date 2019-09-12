import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class Adminlogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
      fetch("http://localhost:8080/admin").then(response => {
        if (response.status === 201) {
          this.setState({
            username: "",
            password: "" })
      }
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
      <div className="biggestbox">
        <div className="bigbox">
          <form onSubmit={this.handleSubmit}>
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
            <button>Log in</button>
          </form>
          <p>Not an admin?</p>
          <button><Link to="/signup">Signup here!</Link></button>
        </div>
      </div>
    )
  }
}

export default Adminlogin
