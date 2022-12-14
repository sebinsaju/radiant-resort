import axios from "axios";
const baseURL = 'http://3.109.182.157:4000/api/v1/';
export const instance = axios.create({
    baseURL: baseURL,
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
    }
})