import React, { Component } from "react";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
//import axios from "axios";
import axios from '../../../src/axios'; // could also be call axiosInstance, not to be confused with axios name in library

class Blog extends Component {
  state = {
    posts: [],
    selectedPost: null,
        error: false,
  };

  componentDidMount() {
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

  postClickHandler(key) {
    console.log(key);
    axios
      .get("/posts/" + key)
      .then((response) => {
        console.log(response.data);
        this.setState({ selectedPost: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  render() {
    console.log("[Blog render]");
   
    if (this.state.error) {
      return <p style={{textAlign:'center'}}>Something went wrong !!</p>;
    } else {
      let posts = this.state.posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={(key) => this.postClickHandler(post.id)}
          />
        );
      });
      return (
        <div>
          <section className="Posts">{posts}</section>
          <section>
            <FullPost post={this.state.selectedPost} />
          </section>
          <section>
            <NewPost />
          </section>
        </div>
      );
    }
  }
}

export default Blog;
