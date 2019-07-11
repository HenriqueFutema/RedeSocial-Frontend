import React, { Component } from "react";
import api from "../services/api";

import moment from "moment";

export default class Post extends Component {
  state = {
    newComment: ""
  };

  handleInputChange = e => {
    this.setState({ newComment: e.target.value });
  };

  handleCommentSubmit = async e => {
    e.preventDefault();

    const comment = await api.post(
      `posts/${this.props.post._id}/comment`,
      { content: this.state.newComment },
      {
        headers: { Authorization: "Bearer " + this.props.token }
      }
    );
    this.setState({ newComment: "" });
    console.log(this.props.id, comment);
  };

  render() {
    return (
      <div className="col col-lg-12 border rounded my-2 p-4">
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
            className="col col-lg-10"
            placeholder="Novo Comentário"
            value={this.state.newComment}
            onChange={this.handleInputChange}
          />
          <button type="submit">Novo Comentário</button>
        </form>
      </div>
    );
  }
}
