// Authentication Service
import axios from "axios";
import { Fetch } from "react-request";
// Getting the API_URL and input in
const API_URL =
  "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login";

// This login gets the  user details and store it in storage
const login = (username, password) => {
  return axios
    .post(
      API_URL,
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "x-api-key": "hCzRYFQ51S4XPWVI5a7Dy8pHw6uiDmfq4CJpUfcZ",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    )
    .then((response) => {
      if (response.request.status == 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

// Use this in pages to get currentUser's Data
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// const to retreive custID,

export default {
  login,
  logout,
  getCurrentUser,
};
