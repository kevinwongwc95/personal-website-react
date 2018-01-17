import React, { Component } from "react";

import NavBar from "./NavBar"

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Home",
    };
  }

  render() {
    return <NavBar />
  }
}

export default Main;
