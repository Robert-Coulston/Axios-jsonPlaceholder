import React, { Component } from "react";
import "./FullPost.css";
import axios from 'axios'

class FullPost extends Component {
    
    deletePostHandler() {
        axios.delete('/posts/' + this.props.post.id).then(response => console.log(response));

    }
  render() {
    console.log("[FullPost render]");
    const postData = this.props.post;

    let postView = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

    if (postData !== null) {
      postView = (
        <div className="FullPost">
          <h1>{postData.title}</h1>
          <p>{postData.body}</p>
          <div className="Edit">
            <button onClick={() => this.deletePostHandler()} className="Delete">Delete</button>
          </div>
        </div>
      );
    }

    return postView;
  }
}

export default FullPost;
