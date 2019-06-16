import React, { Component } from "react";

// import { Container } from './styles';

import LoginForm from "../components/LoginComponent";
import RegisterForm from "../components/ResgisterComponent";

export default class Login extends Component {
  state = {
    formLogar: true
  };

  onChangeForm = e => {
    this.setState({ formLogar: !this.state.formLogar });
  };

  render() {
    return (
      <div>
        {this.state.formLogar ? <LoginForm /> : <RegisterForm />}
        <br />
        <br />
        <button onClick={this.onChangeForm}>Trocar</button>
      </div>
    );
  }
}
