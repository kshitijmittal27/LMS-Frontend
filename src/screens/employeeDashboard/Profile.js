import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Title from "./Title";
import "./Profile.scss";
export default function Profile() {
  const theme = useTheme();
  const [employee, setEmployee] = React.useState();
  React.useEffect(() => {
    setEmployee(JSON.parse(window.localStorage.getItem("employeeData")));
    console.log(
      "employee data",
      JSON.parse(window.localStorage.getItem("employeeData"))
    );
  }, []);
  return (
    <React.Fragment>
      <Title>Employee Profile</Title>
      {employee && (
        <div className="profileWrapper">
          <div className="avatar">
            <img src="assets/shoaib.jpeg" alt="emp" className="avatarPic" />
          </div>
          <div>
            <h2>{employee.e_name}</h2>
            <h3>Associate Software Engineer</h3>
          </div>
          <div className="profileDetails">
            <p>
              <strong>Company</strong> : Nurturelabs
            </p>
            <p>
              <strong>Employee id</strong> : {employee.e_id}
            </p>
            <p>
              <strong>Email</strong> : {employee.e_username}
            </p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
