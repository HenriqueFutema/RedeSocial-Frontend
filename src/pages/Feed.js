import React, { Component } from "react";

// import { Container } from './styles';

export default class Feed extends Component {
  state = {
    name: ""
  };

  componentDidMount() {
    const name = localStorage.getItem("user");
    this.setState({ name: name });
  }

  onRedirectLogin = () => {
    this.props.history.push("/");
  };

  onLogout = () => {
    localStorage.clear();
    sessionStorage.clear();

    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        {this.state.name === "" || this.state.name === undefined ? (
          <div>
            <h1>Erro efetue o login</h1>
            <button onClick={this.onRedirectLogin}>SignIn</button>
          </div>
        ) : (
          <div>
            <h1>Olá {this.state.name}</h1>
            <button onClick={this.onLogout}>Logout</button>
          </div>
        )}
      </div>
    );
  }
}
