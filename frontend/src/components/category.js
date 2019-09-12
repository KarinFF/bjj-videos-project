import React from "react"
import NewSuggestion from "./newsuggestion"

class Category extends React.Component {

  render() {
    const filteredCategories = this.props.categoryList.filter(category => {
      return category.category === this.props.match.params.category
    })
    return (

      <div className="content">
        <div className="heading">
          <h2>{this.props.match.params.category}</h2>
        </div>
        <div className="category">
          {filteredCategories.map(listing => (
            <NewSuggestion
              key={listing._id}
              title={listing.title}
              category={listing.category}
              tags={listing.tags}
              link={listing.link}
              description={listing.description} />
          ))}
        </div>
      </div>
    )
  }
}

export default Category
