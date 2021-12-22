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
  const [dName, setDName] = React.useState("");
  const [dHead, setDHead] = React.useState("");
  const [dEmail, setDEmail] = React.useState("");
  const [dPass, setDPass] = React.useState("");
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
            Add a new department
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
                label="Department Name"
                name="DName"
                autoComplete="number"
                autoFocus
                value={dName}
                onChange={(e) => setDName(e.target.value)}
              />
            </Grid>
            <Grid item md={5}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="reason"
                label="Department Head"
                name="head"
                autoComplete="reason"
                autoFocus
                value={dHead}
                onChange={(e) => setDHead(e.target.value)}
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
                label="DHead username"
                name="CName"
                autoComplete="number"
                autoFocus
                value={dEmail}
                onChange={(e) => setDEmail(e.target.value)}
              />
            </Grid>
            <Grid item md={5}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="reason"
                label="Dhead password"
                name="head"
                autoComplete="reason"
                autoFocus
                value={dPass}
                onChange={(e) => setDPass(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            onClick={() => {
              x.push({
                c_id: window.localStorage.getItem("allData").length + 1,
                c_name: dName,
                c_head: dHead,
                c_head_username: dEmail,
                c_head_password: dPass,
                departments: [],
              });
              alert("Department added successfully");
            }}
          >
            Add department
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
