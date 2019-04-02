import React from "react"
import NewSuggestion from "./newsuggestion"

class AdminView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestList: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/suggestion").then(response => (
      response.json()
    )).then(json => {
      console.log("json: ", json)
      this.setState({ suggestList: json })
    })
  }
  render() {
    return (
      <div>
        <h1> Admin site </h1>
        <div className="admincontent">
          {this.state.suggestList.map(suggestion => (
            <NewSuggestion
              id={suggestion._id}
              title={suggestion.title}
              category={suggestion.category}
              tags={suggestion.tags}
              link={suggestion.link}
              description={suggestion.description} />
          ))}
        </div>
      </div>
    )
  }
}

export default AdminView
