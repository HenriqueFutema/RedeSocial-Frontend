import React, { Component } from "react";
import api from "../services/api";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state.email, this.state.password);

    const { email, password } = this.state;

    const user = await api.post("users/signin", { email, password });

    console.log(user);
    const { token } = user.data;
    const { name } = user.data.user;
    console.log(name);

    sessionStorage.setItem("token", token);
    localStorage.setItem("user", name);

    this.props.onRedirectFeed();
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.email}
            name="email"
            placeholder="Email"
            onChange={this.handleInput}
          />
          <input
            type="password"
            value={this.state.password}
            name="password"
            placeholder="Senha"
            onChange={this.handleInput}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
