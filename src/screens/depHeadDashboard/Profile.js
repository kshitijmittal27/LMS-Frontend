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
          <img src="assets/depHead.jpg" alt="depHead" className="avatarPic" />
        </div>
        <div>
          <h2>Rahul Ambani</h2>
          <h3>Product Manager Head</h3>
        </div>
        <div className="profileDetails">
          <p>
            <strong>Company</strong> : SUN Microsystems
          </p>
          <p>
            <strong>Designation</strong> :Product Manager Head
          </p>
          <p>
            <strong>Email</strong> : shawn@dephead.com
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
