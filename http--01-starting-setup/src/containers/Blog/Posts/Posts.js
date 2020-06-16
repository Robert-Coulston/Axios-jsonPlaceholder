import React, { Component } from "react";
import "./Posts.css";
import axios from "axios";
import Post from "../../../components/Post/Post";
import { Link } from "react-router-dom";

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


  render() {
    console.log("[Blog render]");

    if (this.state.error) {
      return <p style={{ textAlign: "center" }}>Something went wrong !!</p>;
    } else {
      let posts = this.state.posts.map((post) => {
        return (
          <Link to={'/' + post.id} key={post.id} >
            <Post
              title={post.title}
              author={post.author}
              
            />
          </Link>
        );
      });

      return <section className="Posts">{posts}</section>;
    }
  }
}

export default Posts;
