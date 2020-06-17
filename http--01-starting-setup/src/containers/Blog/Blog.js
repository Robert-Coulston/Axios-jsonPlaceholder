import React, { Component } from "react";
import Posts from "./Posts/Posts";
import "./Blog.css";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import NewPost from "./NewPost/NewPost";
import NavBar from "../NavBar/NavBar";
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
          <Route path="/new-post" exact component={() => <NewPost />} />
          <Route path="/posts" component={() => <Posts />} />
          {/* <Route path="/" component={() => <Posts />} /> */}
          <Redirect from="/" to="/posts"/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Blog);
