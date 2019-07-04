import React, { Component } from "react";
import api from "../services/api";
// import { Container } from './styles';

import Post from "../components/Post";
import swal from "sweetalert";

export default class Feed extends Component {
  state = {
    name: "",
    content: "",
    posts: [],
    token: ""
  };

  async componentDidMount() {
    const name = localStorage.getItem("user");
    this.setState({ name: name });

    const token = await sessionStorage.getItem("token");

    if (token === null) {
      this.props.history.push("/");
    } else {
      this.setState({ token: token });
    }

    const posts = await api.get("posts", {
      headers: { Authorization: "Bearer " + this.state.token }
    });

    console.log(posts.data.docs);
    console.log(token);
    this.setState({
      posts: posts.data.docs
    });
  }

  handleInputChange = e => {
    this.setState({ content: e.target.value });
  };

  newPost = async e => {
    console.log("test");

    e.preventDefault();

    const { content, token } = this.state;

    await api.post(
      "posts",
      { content },
      {
        headers: { Authorization: "Bearer " + token }
      }
    );

    swal("Post criado", "Seu post foi criaod com sucesso", "success");
    this.setState({ content: "" });
    this.componentDidMount();
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
      <div className="container mt-4">
        <div className="row">
          <div className="col col-lg-12 col-sm-12">
            <h1>
              Olá {this.state.name}
              <button
                onClick={this.onLogout}
                className="btn btn-danger float-right"
              >
                Logout
              </button>
            </h1>
            <form onSubmit={this.newPost}>
              <textarea
                value={this.state.content}
                onChange={this.handleInputChange}
                placeholder="Novo Post"
                className="form-control col-lg-12"
              />
              <button
                type="submit"
                className="btn btn-primary float-right my-3"
              >
                Novo Post
              </button>
            </form>
          </div>
          {this.state.posts.map(post => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </div>
    );
  }
}
