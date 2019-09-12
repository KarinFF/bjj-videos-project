import React from "react"
import { Link } from "react-router-dom"

class Navigation extends React.Component {

  render() {
    const categoryNames = this.props.categoryList.map(suggestion => suggestion.category)
    const uniqueCategories = [...(new Set(categoryNames))]
    return (
      <div className="nav">
        <ul>
          <li>
            <Link to="/">
                Home
            </Link>
            {uniqueCategories.map((listing) => (
              <div className="cats">
                <ul key={listing._id}>
                  <li>
                    <Link to={`/category/${listing}`}>{listing}</Link>
                  </li>
                </ul>
              </div>
            ))}
          </li>
          <li>
            <Link to="/about">
                About
            </Link>
          </li>
        </ul>
        <Link to="/suggest" className="btnstyle">
            Suggest video
        </Link>
        <Link to="/admin" className="btnstyle">
            Admin Login
        </Link>
      </div>

    )
  }
}

export default Navigation
