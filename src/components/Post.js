import React, { Component } from "react";

// import { Container } from './styles';

export default class Post extends Component {
  render() {
    return (
      <div>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
}
