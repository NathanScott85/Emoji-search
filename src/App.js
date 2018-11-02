import React, { Component } from "react";
import Search from "./components/Search";
import Emoji from "./components/Emoji";
import Header from "./components/Header";
import emojis from "./data/emojis";
class App extends Component {
  state = {
    emojis: emojis,
    searchTerm: ""
  };
  render() {
    return (
      <main>
        {/*we use value here and pass the value into the Search Component, 
        we also bring in the handleChange 
        function from below so that it will detect the changes */}

        <Header name="Emoji Search" />

        <Search name="Search" updateSearch={this.updateSearch} />
        <Emoji name="Emoji" searchTerm={this.state.searchTerm} />
      </main>
    );
  }

  updateSearch = searchTerm => {
    this.setState({
      searchTerm: searchTerm
    });
  };
}

export default App;
