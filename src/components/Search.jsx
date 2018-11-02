import React, { Component } from "react";
import "./css/search.css";
class Search extends Component {
  state;
  render() {
    // console.log(props);
    return (
      <div>
        <form className="form" action="">
          <label className="element">{this.props.name}</label>
          <input
            type="text"
            search={this.props.search}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
  handleChange = event => {
    const searchTerm = event.target.value;
    // console.log(value);
    console.log(searchTerm);
    this.props.updateSearch(searchTerm);
  };
}

export default Search;
