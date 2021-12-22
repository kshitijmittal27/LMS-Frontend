import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import companyData from "../../companies";
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
  const [cName, setCName] = React.useState("");
  const [cHead, setCHead] = React.useState("");
  const [cEmail, setCEmail] = React.useState("");
  const [cPass, setCPass] = React.useState("");
  let x = JSON.parse(window.localStorage.getItem("allData"));
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
            Register a new company
          </Typography>
          {/* <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            gutterBottom
          >
            Leaves in hand : 5
          </Typography> */}
          Please fill out these fields :
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item md={5}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="number"
                label="Company Name"
                name="CName"
                autoComplete="number"
                autoFocus
                value={cName}
                onChange={(e) => setCName(e.target.value)}
              />
            </Grid>
            <Grid item md={5}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="reason"
                label="Company Head"
                name="head"
                autoComplete="reason"
                autoFocus
                value={cHead}
                onChange={(e) => setCHead(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item md={5}>
              <TextField
                margin="normal"
                required
                fullWidth
                type="email"
                id="number"
                label="CHead username"
                name="CName"
                autoComplete="number"
                autoFocus
                value={cEmail}
                onChange={(e) => setCEmail(e.target.value)}
              />
            </Grid>
            <Grid item md={5}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="reason"
                label="Chead password"
                name="head"
                autoComplete="reason"
                autoFocus
                value={cPass}
                onChange={(e) => setCPass(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            onClick={() => {
              x.push({
                c_id: window.localStorage.getItem("allData").length + 1,
                c_name: cName,
                c_head: cHead,
                c_head_username: cEmail,
                c_head_password: cPass,
                departments: [],
              });
            }}
          >
            Add company
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
