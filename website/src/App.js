import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import accountBalance from "./components/accountBalance";

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  // useEffect(() => {
  //   const user = AuthService.getCurrentUser();

  //   if (user) {
  //     setCurrentUser(user);
  //   }
  // }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light shadow p-3 mb-5 bg-white rounded">
        <Link to={"/"} className="navbar-brand">
          <img
            src="https://www.dbs.com.sg/iwov-resources/flp/images/dbs_logo.svg"
            style={{
              height: "auto",
              width: "auto",
              maxHeight: "50px",
            }}
          />
        </Link>
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto"></div>
        )}
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/home"]} component={Home} />
          <Route exact path="/" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
          <Route path="/accountBalance" component={accountBalance} />
          {/* <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} /> */}
        </Switch>
      </div>
    </div>
  );
};

export default App;
