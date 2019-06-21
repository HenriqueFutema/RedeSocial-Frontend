import React, { Component } from "react";
import api from "../services/api";
// import { Container } from './styles';

export default class Feed extends Component {
  state = {
    name: "",
    content: ""
  };

  async componentDidMount() {
    const name = localStorage.getItem("user");
    this.setState({ name: name });

    const token = await sessionStorage.getItem("token");
    const posts = await api.get("posts");

    console.log(posts);
    console.log(token);
  }

  handleInputChange = e => {
    this.setState({ content: e.target.value });
  };

  newPost = async e => {
    console.log("test");

    e.preventDefault();

    const { content } = this.state;

    await api.post("posts", { content });

    console.log("deu certo");
    this.setState({ content: "" });
  };

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
            <form onSubmit={this.newPost}>
              <input
                value={this.state.content}
                onChange={this.handleInputChange}
                placeholder="Novo Post"
              />
              <button type="submit">Novo Post</button>
            </form>

            <button onClick={this.onLogout}>Logout</button>
          </div>
        )}
      </div>
    );
  }
}
