// Data Service
// Used to access data
import axios from "axios";
import authHeader from "./auth-header";

const API_URL =
  "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/transaction/view";

const getTransaction = (custID) => {
  //   return axios
  //     .post(
  //       API_URL,
  //       {
  //         custID: custID,
  //       },
  //       {
  //         headers: {
  //           "x-api-key": "hCzRYFQ51S4XPWVI5a7Dy8pHw6uiDmfq4CJpUfcZ",
  //           "Access-Control-Allow-Origin": "*",
  //           "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(data);
  //     });
  //   return response.data;
};

export default {
  getTransaction,
};
