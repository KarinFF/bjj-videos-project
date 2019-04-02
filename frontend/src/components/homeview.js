import React from "react"
import NewSuggestion from "./newsuggestion"

class HomeView extends React.Component {
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
      this.setState({ suggestList: json })
    })
  }

  handleNewSuggest = suggestion => {
    this.setState({
      suggestion: [suggestion, ...this.state.suggestList]
    })
  }

  render() {
    return (
      <div className="content">
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

    )
  }

}

export default HomeView
