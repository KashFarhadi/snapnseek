import React, { Component } from "react";
import { logoutThenGoToLogin as logout } from "../actions/auth";
import { connect } from "react-redux";

class Logout extends Component {
  state = {};

  handleLogout = event => {
    this.props.logout();
    this.setState({ active: false });
  };

  handleOpen = () => this.setState({ active: true });

  render() {
    // const { active } = this.state;
    // for adding dimmer
    return (
      <button
        name="logout"
        onClick={this.handleLogout}
        size="massive"
        color="red"
      >
        Logout
      </button>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.logoutLoading,
    err: auth.loginError
  }),
  { logout }
)(Logout);
