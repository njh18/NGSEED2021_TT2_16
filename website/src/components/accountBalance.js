import React, { useState, useEffect } from "react";

const accountBalance = () => {
  // to be changed with api call
  var accountDetails = [
    {
      accountName: "Current Account",
      availableBal: 282.69,
      accountNumber: 208473,
      linked: false,
    },
    {
      accountName: "Multiplier Account",
      availableBal: 791.51,
      accountNumber: 4846608,
      linked: false,
    },
    {
      accountName: "Saving Account",
      availableBal: 471.98,
      accountNumber: 44049227,
      linked: true,
    },
  ];

  var arr = [];
  for (var i = 0; i < accountDetails.length; i++) {
    arr.push(i + 1);
  }

  var elements = [];
  for (var i = 0; i < arr.length; i++) {
    elements.push(
      <div
        class="card"
        style={{
          width: "20rem",
          alignContent: "Center",
          margin: "0 auto",
          float: "None",
          marginBottom: "10px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <img src="https://picsum.photos/seed/picsum/200/300" />
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Account #{arr[i]}: {accountDetails[i].accountName}
            </li>
            <li class="list-group-item">
              Account Number: {accountDetails[i].accountNumber}
            </li>
            <li class="list-group-item">
              Balance: {accountDetails[i].availableBal}
            </li>
            <li class="list-group-item">linked: {accountDetails[i].linked}</li>
          </ul>
        </div>
      </div>
    );
  }

  return <div className="row">{elements}</div>;
};

export default accountBalance;
