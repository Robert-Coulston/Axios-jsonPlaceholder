import React from "react";
import "./Post.css";
import {withRouter} from 'react-router-dom';

const post = (props) => {
  console.log(props);

  return (
    <article className="Post">
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  );
};

// Pass router properties to post
export default withRouter(post);
// export default post;