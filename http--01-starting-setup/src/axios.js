import axios from 'axios'


// A specific instance when the default values need to be different.
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",

});

instance.defaults.headers.common['Authorization'] = "AUTH TOKEN FROM INSTANCE";

// Can add request headers....
instance.interceptors.request.use(
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

export default instance;
