import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import { WindowRounded } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

export default function LeaveApplicationModal(props) {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => props.setOpen(false);
  const [number, setNumber] = React.useState();
  const [reason, setReason] = React.useState("");
  const [employee, setEmployee] = React.useState();
  React.useEffect(() => {
    setEmployee(JSON.parse(window.localStorage.getItem("employeeData")));
    console.log(
      "employee data",
      JSON.parse(window.localStorage.getItem("employeeData"))
    );
  }, []);

  // const handleSubmit = () => {
  //   JSON.parse(window.localStorage.getItem("employeeData")).e_leaveHistory.push(
  //     {
  //       leave_applied: new Date().toLocaleString,
  //       leave_days: number,
  //       leave_id:
  //         JSON.parse(window.localStorage.getItem("employeeData")).e_leaveHistory
  //           .length + 1,
  //       leave_reason: reason,
  //       leave_status: "Pending",
  //     }
  //   );
  //   console.log(
  //     JSON.parse(window.localStorage.getItem("employeeData")).e_leaveHistory
  //   );
  //   // employee.e_leaveHistory.push({})
  // };
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            gutterBottom
          >
            Apply for a leave
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            gutterBottom
          >
            Leaves in hand : {employee && employee.e_leaveBalance}
          </Typography>
          Please fill out these fields :
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item md={5}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="number"
                label="Number of days"
                name="number"
                autoComplete="number"
                autoFocus
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Grid>
            <Grid item md={5}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="reason"
                label="Reason of leave"
                name="reason"
                autoComplete="reason"
                autoFocus
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            onClick={() => {
              alert("Application Submitted for a leave of " + number + " days");
              props.setOpen(false);
            }}
          >
            Submit Application
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
