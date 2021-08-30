import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
// instance.get("/foo-bar");

export default instance;
// https://api.themoviedb.org/3/trending/all/week?api_key=797e625efafcd7a70ae33be6f45084c8&language=en-US
