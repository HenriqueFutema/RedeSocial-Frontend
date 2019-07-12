import React, { Component } from "react";
import api from "../services/api";
import swal from "sweetalert";

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
    let err = "";
    const user = await api
      .post("users/signin", { email, password })
      .catch(function(error) {
        swal(`Erro`, "Email ou senha inválida", "error");
        err = error.response.status;
      });

    console.log(err);
    if (err === "") {
      const { token } = user.data;
      const { name } = user.data.user;

      console.log(token, name);

      swal(`Olá`, "Seja muit Bem Vindo", "success");

      sessionStorage.setItem("token", token);
      localStorage.setItem("user", name);

      this.props.onRedirectFeed();
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center mt-4 text-center">
          <div className="col col-lg-4 border">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                className="form-control my-2"
                value={this.state.email}
                name="email"
                placeholder="Email"
                onChange={this.handleInput}
              />
              <input
                type="password"
                className="form-control my-2"
                value={this.state.password}
                name="password"
                placeholder="Senha"
                onChange={this.handleInput}
              />
              <button className="btn btn-success my-2" type="submit">
                Login
              </button>
            </form>
            <button
              onClick={this.props.onChangeForm}
              className="btn btn-link float-left"
            >
              Criar conta.
            </button>
          </div>
        </div>
      </div>
    );
  }
}
