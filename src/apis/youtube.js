import axios from "axios";
const KEY = "AIzaSyBUyrb5qd7wJsOLpwM5K0eiZ5g4gwPAGkA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
