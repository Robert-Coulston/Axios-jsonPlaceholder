import React, { Component } from "react";
import axios from 'axios';
import {Redirect, withRouter} from 'react-router-dom';

import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max"
    // submitted: false
  };

  componentDidMount() {
    // props includes routing information
    console.log(this.props);
  }

  postDataHandler = () => {
      console.log("[postDataHandler]");
      
      const post = {
          title: this.state.title,
          body: this.state.content,
          author: this.state.author
      }

      axios.post("/posts", post)
      .then((response) => {
        // Pushes a new page onto the stack of pages
        this.props.history.push('/posts');

        // alternate way of redirect - directly replace page on stack instead of pushing a new page
        //this.setState({submitted:true}); 
        console.log(response)
      });
  }

  render() {
    // let redirect = null;
    // if (this.state.submitted) {
    //   redirect = <Redirect to="/posts"/>;
    // }

   return (
      <div className="NewPost">
        {/* {redirect} */}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={() => this.postDataHandler()}>Add Post</button>
      </div>
    );
  }
}

export default withRouter(NewPost);
