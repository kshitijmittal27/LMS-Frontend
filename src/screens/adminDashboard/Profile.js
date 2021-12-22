import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Title from "./Title";
import "./Profile.scss";
import companyData from "../../companies";
export default function Profile() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Admin Profile</Title>
      <div className="profileWrapper">
        <div className="avatar">
          <img src="assets/jayesh.jpg" alt="emp" className="avatarPic" />
        </div>
        <div>
          <h2>Jayesh Singh</h2>
          <h3>Administrator, Leave Management System</h3>
        </div>
        <div className="profileDetails">
          <p>
            <strong>Education</strong> : B.Tech in CSE
          </p>
          <p>
            <strong>Designation</strong> : Product Manager
          </p>
          <p>
            <strong>Email</strong> : admin@lms
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
