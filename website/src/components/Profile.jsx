import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser(16);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"/>
        </h3>
      </header>
      <p>
        <strong>Name:</strong> {currentUser.firstName}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p>
        <strong>Age:</strong> {currentUser.age}
      </p>
      <p>
        <strong>Address:</strong> {currentUser.address}
      </p>
      <p>
        <strong>Phone Number:</strong> {currentUser.phoneNumber}
      </p>
    </div>
  );
};

export default Profile;
