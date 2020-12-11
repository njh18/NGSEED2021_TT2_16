// Authentication Service
import axios from "axios";

// Getting the API_URL and input in
const API_URL =
  "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login";

const register = (username, password) => {
  return axios.post(API_URL + "signup", {
    username,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL, {
      headers: {
        "x-api-key": "hCzRYFQ51S4XPWVI5a7Dy8pHw6uiDmfq4CJpUfcZ",
      },
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
