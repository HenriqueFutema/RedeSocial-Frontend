import React, { Component } from "react";

import moment from "moment";

export default class Post extends Component {
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
      </div>
    );
  }
}
