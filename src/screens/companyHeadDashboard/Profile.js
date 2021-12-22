import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Title from "./Title";
import "./Profile.scss";
export default function Profile() {
  const theme = useTheme();
  const [companyData, setCompanyData] = React.useState();
  React.useEffect(() => {
    setCompanyData(JSON.parse(window.localStorage.getItem("companyData")));
  }, []);

  return (
    <React.Fragment>
      <Title>Admin Profile</Title>
      <div className="profileWrapper">
        <div className="avatar">
          <img src="assets/yashchead.jpg" alt="chead" className="avatarPic" />
        </div>
        {companyData && (
          <div>
            <h2>{companyData.c_head ? companyData.c_head : ""}</h2>
            <h3>Company Head, {companyData.c_name}</h3>
          </div>
        )}

        <div className="profileDetails">
          <p>
            <strong>Education</strong> : MBA, IIM Ahmedebad
          </p>
          <p>
            <strong>Designation</strong> : Product Manager
          </p>
          {companyData && (
            <p>
              <strong>Email</strong> : {companyData.c_head_username}
            </p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
