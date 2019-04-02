import React from "react"
import { Link } from "react-router-dom"

class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <Link to="/">
          <h1>BJJ.VIDEOS</h1>
          <p>Hello and welcome to my BJJ video site. It is number one.</p>
        </Link>
      </header>
    )
  }
}

export default Header
