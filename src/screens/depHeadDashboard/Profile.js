import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Title from "./Title";
import "./Profile.scss";
export default function Profile() {
  const theme = useTheme();
  const [employees, setEmployees] = React.useState();
  React.useEffect(() => {
    setEmployees(JSON.parse(window.localStorage.getItem("departmentData")));
    console.log(
      "departments",
      JSON.parse(window.localStorage.getItem("departmentData"))
    );
  }, []);
  return (
    <React.Fragment>
      <Title>Profile</Title>
      <div className="profileWrapper">
        <div className="avatar">
          <img src="assets/jayesh.jpg" alt="chead" className="avatarPic" />
        </div>
        {employees && (
          <div>
            <h2>{employees.d_head ? employees.d_head : ""}</h2>
            <h3>Department Head, {employees.d_name}</h3>
          </div>
        )}

        <div className="profileDetails">
          {employees && (
            <p>
              <strong>Department ID</strong> : {employees.d_id}
            </p>
          )}

          <p>
            <strong>Designation</strong> : UI-UX Manager
          </p>
          {employees && (
            <p>
              <strong>Email</strong> : {employees.d_head_username}
            </p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
