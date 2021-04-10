import axios from "axios";

/* Instance with base URL */
const instance = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0",
});

export default instance;
