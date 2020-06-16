import React, { Component } from "react";
import "./Posts.css";
import axios from "axios";
import Post from "../../../components/Post/Post";
import { withRouter } from "react-router-dom";

class Posts extends Component {
  state = {
    posts: [],
    selectedPost: null,
    error: false,
  };

  componentDidMount() {
    console.log(this.props);

    // async call
    this.GetPosts();
  }

  GetPosts() {
    axios
      .get("/posts")
      .then((response) => {
        // working with the returned data from the axios call
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return { ...post, author: "Robert" };
        });
        this.setState({ posts: updatedPosts });
      })
      .then(() => console.log(this.state.posts))
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  postSelectedHandler = (key) => {
    console.log("postSelectedHandler");
    console.log(key, this.props);
        
    // Go to the selected post with key
    this.props.history.push({pathname: '/' + key});
  }

  render() {
    console.log("[Blog render]");

    if (this.state.error) {
      return <p style={{ textAlign: "center" }}>Something went wrong !!</p>;
    } else {
      let posts = this.state.posts.map((post) => {
        return (
          // <Link to={'/' + post.id} key={post.id} >
            <Post
              key={post.id}
              index={post.id}
              title={post.title}
              author={post.author}
              clicked={(key) => this.postSelectedHandler(post.id)}
            />
          // </Link>
        );
      });

      return <section className="Posts">{posts}</section>;
    }
  }
}

export default withRouter(Posts);
