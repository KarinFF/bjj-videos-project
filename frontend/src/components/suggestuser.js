import React from "react"

export default class SuggestUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      category: "",
      tags: "",
      link: "",
      description: ""
    }
  }

  handleSuggestSubmit = event => {
    event.preventDefault()
    fetch("http://localhost:8080/suggestion", {
      method: "POST",
      headers: {
        Accept: "application/json, textplain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => {
      if (response.status === 201) {
        this.setState({
          title: "",
          category: "",
          tags: "",
          link: "",
          description: ""
        })
      }
    }).catch(err => {
      console.log("WRONG!", err)
    })
  }

  handleTitle = event => {
    this.setState({
      title: event.target.value
    })
  }

  handleCategory = event => {
    this.setState({
      category: event.target.value
    })
  }

  handleTags = event => {
    this.setState({
      tags: event.target.value
    })
  }
  handleLink = event => {
    this.setState({
      link: event.target.value
    })
  }

  handleDescription = event => {
    this.setState({
      description: event.target.value
    })
  }
  render() {
    return (
      <div className="formbox">
        <form onSubmit={this.handleSuggestSubmit} className="userform">
          <h2>Suggest video</h2>
          <h3>How to add a video to our library:</h3>
          <p>Either you copy and paste everything from the youtube video you want to add. Or you can add anything you want, except the youtube id, that will fetch the video</p>
          <label>
            <p>Title</p>
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleTitle} />
          </label>
          <label>
            <p>Category</p>
            <input
              type="text"
              value={this.state.category}
              onChange={this.handleCategory} />
          </label>
          <label>
            <p>Tags</p>
            <input
              type="text"
              value={this.state.tags}
              onChange={this.handleTags} />
          </label>
          <label>
            <p>Add the youtube ID here</p>
            <input
              type="text"
              value={this.state.link}
              onChange={this.handleLink} />
          </label>
          <label>
            <p>Description</p>
            <textarea
               rows="10" cols="200"
              value={this.state.description}
            onChange={this.handleDescription}>

            </textarea>
          </label>
          <div>
            <button className="btnstyle">Save</button>
          </div>
        </form>
      </div>
    )
  }
}
