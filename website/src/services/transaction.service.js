// Data Service
// Used to access data
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "Ins";


const getTransaction = (custID) => {
    return axios
        .post(API_URL, {
            custID
        }, { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};


export default {
    getTransaction
};