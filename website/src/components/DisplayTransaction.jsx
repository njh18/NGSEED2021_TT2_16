

import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import TransactionService from "../services/transaction.service";

import { isEmail } from "validator";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const DisplayTransaction = (props) => {

  const custID = localStorage.getItem("custID")

  useEffect(() => {
    TransactionService.getTransaction(custID).then(
      (response) => {
        console.log(response);
      
      },
      (error) => {
        // const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }, []);


  // To replace with data from api
  const Payee = "Group 12";



  return (
    <div className="col-md-12">
      <table class="table table-hover">
      <thead>
            <tr>
                <th>Payee</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Category</th>
            </tr>
        </thead>
         <tbody>
            <tr>
                <td>  {Payee} </td>
                <td>  data.Date </td>
                <td>Amount</td>
                <td>Category</td>
            </tr>
        </tbody>
      </table>

    </div>
  );
};

export default DisplayTransaction;
