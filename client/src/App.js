import React, { Component } from "react";
import Users from "./components/users/Users";
import AppHeader from "./components/appHeader/AppHeader";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <Users />
      </React.Fragment>
    );
  }
}

export default App;
