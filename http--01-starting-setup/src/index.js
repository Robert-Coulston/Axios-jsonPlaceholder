import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = "AUTH TOKEN";
axios.defaults.headers.post['Content-Type'] = "application/json"; // This is the default anyway, but shown because this is what is possible


// Can add request headers....
axios.interceptors.request.use(
  (request) => {
    console.log("request");
    console.log(request);

    //Edit request
    return request;
  },
  (error) => {
    console.log(error);
    //Pass on the error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log("response");
    console.log(response);

    //Edit request
    return response;
  },
  (error) => {
    console.log(error);
    // Pass on the error
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
