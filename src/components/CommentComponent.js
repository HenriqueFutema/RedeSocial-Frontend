import React, { Component } from "react";

import api from "../services/api";

export default class Comment extends Component {
  state = {
    user: ""
  };

  async componentDidMount() {
    console.log(this.props.token);

    const user = await api.get(`user/${this.props.comment.author}`, {
      headers: { Authorization: "Bearer " + this.props.token }
    });
    this.setState({
      user: user.data.name
    });
  }

  render() {
    return (
      <div>
        <div className="col-12 col-lg-12 border rounded my-2 p-4">
          <p className="float-right">{this.state.user}</p>
        </div>
      </div>
    );
  }
}
