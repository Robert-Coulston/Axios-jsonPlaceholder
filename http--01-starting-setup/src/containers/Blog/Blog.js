import React, { Component } from "react";
import Posts from "./Posts/Posts";
import "./Blog.css";
import { Route, withRouter, Switch } from "react-router-dom";
import NewPost from "./NewPost/NewPost";
import NavBar from "../NavBar/NavBar";
import FullPost from "./FullPost/FullPost";
import axios from "axios";

class Blog extends Component {
  render() {
    console.log("Blog");
    console.log(this.props);

    return (
      <div className="Blog">
        <NavBar />
        {/* Ensure only one route is rendered with Switch */}
        <Switch>
          <Route path="/" exact component={() => <Posts />} />
          <Route path="/new-post" exact component={() => <NewPost />} />
          <Route path="/:id" component={() => <FullPost />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Blog);
