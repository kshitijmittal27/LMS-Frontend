import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { Button } from "@mui/material";
import LeaveApplicationModal from "./LeaveApplicationModal";

function preventDefault(event) {
  event.preventDefault();
}

export default function LeaveData() {
  const [modalOpen, setModalOpen] = React.useState(false);
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
      <Title>Leave balance</Title>
      <Typography component="p" variant="h4">
        {employee && employee.e_leaveBalance}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }} variant="body1">
        As on {new Date().toLocaleDateString()}
      </Typography>
      <div>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link> */}
        <Button variant="contained" onClick={() => setModalOpen(!modalOpen)}>
          New Application
        </Button>
      </div>
      <LeaveApplicationModal open={modalOpen} setOpen={setModalOpen} />
    </React.Fragment>
  );
}
