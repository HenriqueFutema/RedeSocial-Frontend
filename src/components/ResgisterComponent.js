import React, { Component } from "react";

import api from "../services/api";

export default class RegisterForm extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { name, email, password } = this.state;

    const user = await api.post("users/signup", { name, email, password });

    console.log(user);

    alert("Cadastro Criado");

    this.setState({ name: "", email: "", password: "" });
    this.props.onRedirectLogin();
  };

  render() {
    return (
      <div>
        <h1>Registrar</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            name="name"
            placeholder="Nome"
            onChange={this.handleInput}
          />
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
          <button type="submit">Registrar</button>
        </form>
      </div>
    );
  }
}
