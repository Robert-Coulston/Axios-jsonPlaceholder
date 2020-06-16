import React, { Component } from "react";
import "./FullPost.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

class FullPost extends Component {
  state = {
    post: null,
    error: false,
  };

  deletePostHandler() {
    axios
      .delete("/posts/" + this.props.post.id)
      .then((response) => console.log(response));
  }

  componentWillMount() {
    console.log("[FullPost componentWillMount]");
    console.log(this.props);
    this.getPostHandler(this.props.match.params.id);
  }

  getPostHandler = (key) => {
    console.log("started getPostHandler method");
    axios
      .get("/posts/" + key)
      .then((response) => {
        console.log("returned post data");
        this.setState({ post: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
      console.log("finished getPostHandler method");
    };

  render() {
    console.log("[FullPost render]");
    console.log(this.state.post);
    const postData = this.state.post;

    let postView = <p style={{ textAlign: "center" }}>Loading....</p>;

    if (postData !== null) {
      postView = (
        <div className="FullPost">
          <h1>{postData.title}</h1>
          <p>{postData.body}</p>
          <div className="Edit">
            <button onClick={() => this.deletePostHandler()} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }

    return postView;
  }
}

export default withRouter(FullPost);
