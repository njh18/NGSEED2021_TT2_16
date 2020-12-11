var express = require('express');
var router = express.Router();
var axios = require('axios');

const API_URL =
  "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login";

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("'/login' call");
    return axios.post("https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login", {
        "x-api-key": "hCzRYFQ51S4XPWVI5a7Dy8pHw6uiDmfq4CJpUfcZ",
        username: "Group16",
        password: "4AjetA99kfTWKdR"
    });
});

const login = (username, password) => {
    return axios
      .post(API_URL, {
        username,
        password,
      })
      .then((response) => {
        return response.data;
    });
};


module.exports = router;
