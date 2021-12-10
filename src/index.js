import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./screens/signIn/SignIn";
import SignUp from "./screens/signUp/SignUp";
import EmployeeDashboard from "./screens/employeeDashboard/EmployeeDashboard";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route
          exact
          path="/employee-dashboard"
          element={<EmployeeDashboard />}
        />

        {/* <Route exact path="/employee-dashboard" element={<EmployeeDashboard />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
