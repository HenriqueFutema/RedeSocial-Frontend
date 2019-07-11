import React, { Component } from "react";
import api from "../services/api";

import moment from "moment";
import swal from "sweetalert";

export default class Post extends Component {
  state = {
    newComment: ""
  };

  handleInputChange = e => {
    this.setState({ newComment: e.target.value });
  };

  handleCommentSubmit = async e => {
    e.preventDefault();
    if (this.state.newComment !== null) {
      await api.post(
        `posts/${this.props.post._id}/comment`,
        { content: this.state.newComment },
        {
          headers: { Authorization: "Bearer " + this.props.token }
        }
      );
      this.setState({ newComment: "" });
      swal("Comentário criado", `${this.state.newComment}`, "success");
    }
  };

  render() {
    return (
      <div className="col-12 col-lg-12 border rounded my-2 p-4">
        <p className="float-right">
          {moment(this.props.post.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </p>
        <h4>{this.props.post.author.name}</h4>
        <h6>{this.props.post.content}</h6>
        <p>
          {this.props.post.likes}{" "}
          <button
            className="btn btn-sm btn-primary"
            onClick={() => this.props.handleLike(this.props.post._id)}
          >
            LIKE
          </button>
        </p>
        <form onSubmit={this.handleCommentSubmit}>
          <input
            type="text"
            className="col col-lg-9 m-2"
            placeholder="Novo Comentário"
            value={this.state.newComment}
            onChange={this.handleInputChange}
          />
          <button type="submit" className="col-12 col-lg-2 m-2 btn btn-success">
            Novo Comentário
          </button>
        </form>
      </div>
    );
  }
}
