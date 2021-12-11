import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";

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
            Leaves in hand : 5
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
