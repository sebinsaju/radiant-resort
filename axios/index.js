import axios from "axios";
const baseURL = 'http://api-radiant.herokuapp.com/';
export const instance = axios.create({
    baseURL: baseURL,
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
    }
})