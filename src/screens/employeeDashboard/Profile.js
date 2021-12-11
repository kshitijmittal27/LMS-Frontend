import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Title from "./Title";
import "./Profile.scss";
export default function Profile() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Profile</Title>
      <div className="profileWrapper">
        <div className="avatar">
          <img src="assets/employee.jpg" alt="emp" className="avatarPic" />
        </div>
        <div>
          <h2>Alexandria Coslov</h2>
          <h3>Associate Software Engineer</h3>
        </div>
        <div className="profileDetails">
          <p>
            <strong>Company</strong> : SUN Microsystems
          </p>
          <p>
            <strong>Designation</strong> : Associate SDE
          </p>
          <p>
            <strong>Email</strong> : alexandria@emp.com
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
