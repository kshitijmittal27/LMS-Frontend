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
  return (
    <React.Fragment>
      <Title>Add a new department</Title>
      {/* <Typography component="p" variant="h4">
        5
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }} variant="body1">
        As on {new Date().toLocaleDateString()}
      </Typography> */}
      <div>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link> */}
        <Button variant="contained" onClick={() => setModalOpen(!modalOpen)}>
          New Department
        </Button>
      </div>
      <LeaveApplicationModal open={modalOpen} setOpen={setModalOpen} />
    </React.Fragment>
  );
}
