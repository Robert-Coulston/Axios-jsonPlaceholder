import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import './NavBar.css';

const NavBar = (props) => {
  console.log("NavBar");
  console.log(props);
  return (
    <header className="NavBar">
      <nav>
        <ul>
          <li>
            {/* NavLink used instead of anchor a because it avoids reloading the page */}
            <NavLink to="/" exact activeClassName="my-active" activeStyle={{textDecoration:'underline'}}>Home</NavLink>
          </li>
          <li>
            <NavLink to={{pathname:'/new-post'}} exact activeClassName="my-active" activeStyle={{textDecoration:'underline'}}>New Post</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);
