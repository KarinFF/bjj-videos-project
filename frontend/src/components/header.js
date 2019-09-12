import React from "react"
import { Link } from "react-router-dom"

class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <Link to="/">
          <h1>BJJ VIDEOS</h1>
          <p>Welcome to this library for videos, where you can watch videos or add more!</p>
        </Link>
      </header>
    )
  }
}

export default Header
