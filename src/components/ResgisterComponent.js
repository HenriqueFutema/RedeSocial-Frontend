import React, { Component } from "react";
import api from "../services/api";

import swal from "sweetalert";

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
    if (user) {
      swal("Cadastro Criado", "Agora efetue o seu login", "success");

      this.setState({ name: "", email: "", password: "" });
      this.props.onRedirectLogin();
    } else {
      swal("Erro", "Cadastre um novo email", "error");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center mt-4 text-center">
          <div className="col col-lg-4 border">
            <h1>Registrar</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.name}
                name="name"
                placeholder="Nome"
                onChange={this.handleInput}
                className="form-control my-2"
              />
              <input
                type="text"
                value={this.state.email}
                name="email"
                placeholder="Email"
                onChange={this.handleInput}
                className="form-control my-2"
              />
              <input
                type="password"
                value={this.state.password}
                name="password"
                placeholder="Senha"
                onChange={this.handleInput}
                className="form-control my-2"
              />
              <button type="submit" className="btn btn-success">
                Registrar
              </button>
            </form>
            <button
              onClick={this.props.onChangeForm}
              className="btn btn-link float-left"
            >
              Trocar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
