import React from "react"
import { Route } from "react-router-dom"
import Modal from "react-modal"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "700px"
  }
}

class NewSuggestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal() {
  // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  handleDelete = event => {
    event.stopPropagation()
    fetch("http://localhost:8080/suggestion", {
      method: "DELETE",
      headers: {
        Accept: "application/json, textplain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ suggestionId: this.props.id })
    }).then(response => (
      response.status === 201
    )).catch(err => {
      // api down? request failed?
      console.log("Error!", err)
    })
  }
  render() {
    return (
      <div className="video">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <div className="modal">
            <div className="videoWrapper">
              <iframe width="560" height="349" src={"http://www.youtube.com/embed/" + this.props.link + "?autoplay=0"} frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </Modal>
        <a style={{ cursor: 'pointer'}} onClick={this.openModal} >
          <img src={"https://img.youtube.com/vi/" + this.props.link + "/0.jpg"} alt="screenshot of video" />
          <div className="info">
            <h4>{this.props.title}</h4>
            <p className="cat">{this.props.category}</p>
            <p>{this.props.description}</p>
            <p className="tags">Tags: {this.props.tags}</p>
          </div>
          <Route
            path="/admin"
            render={props => <button className="btnstyle" onClick={this.handleDelete} >Delete</button>} />
        </a>
      </div>
    )
  }
}

export default NewSuggestion
