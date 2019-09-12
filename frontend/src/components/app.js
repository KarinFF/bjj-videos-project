import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Header from "./header"
import Navigation from "./navigation"
import HomeView from "./homeview"
import About from "./about"
import SuggestUser from "./suggestuser"
// import AdminView from "./adminview"
import Signup from "./signup"
import AdminLogin from "./admin-login"
import Category from "./category"
import NewSuggestion from "./newsuggestion"
import "./app.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryList: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/suggestion").then(response => (
      response.json()
    )).then(json => {
      this.setState({ categoryList: json })
    })
  }

  render() {
    return (
      <BrowserRouter>

        <div>
          <Header />
          <div className="wrapper">
            <Route exact path="/" component={HomeView} />
            <Route path="/admin" component={AdminLogin} />
            <Route path="/about" component={About} />
            <Route path="/suggest" component={SuggestUser} />
            <Route path="/signup" component={Signup} />
            <Route
              path="/"
              render={props => <Navigation
                categoryList={this.state.categoryList}
                {...props} />}/>
            <Route
              path="/category/:category"
              render={props => <Category categoryList={this.state.categoryList} {...props} />} />
            <Route
              path="/video"
              render={props => <NewSuggestion
                categoryList={this.state.categoryList}
                {...props} />} />
          </div>
        </div>
      </BrowserRouter>
    )
  }

}

export default App
