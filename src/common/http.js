import axios from "axios";
const baseURL = process.env.API_PREFIX || "http://localhost:1337/v1/";
const http = axios.create({
  baseURL
});
export { http };
