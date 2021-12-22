import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import companyData from "../../companies";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Leave Management System
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  const navigate = useNavigate();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   companyData.map((company) => {
  //     if (company.c_head_username == email && company.c_head_password == pass) {
  //       window.localStorage.setItem("companyData", JSON.stringify(company));
  //       navigate("/company-head-dashboard");
  //       console.log(window.localStorage.getItem("companyData"));
  //     } else {
  //       company.departments.map((department) => {
  //         if (
  //           department.d_head_username == email &&
  //           department.d_head_password == pass
  //         ) {
  //           window.localStorage.setItem(
  //             "departmentData",
  //             JSON.stringify(department)
  //           );
  //           navigate("/department-head-dashboard");
  //           console.log(window.localStorage.getItem("departmentData"));
  //         } else {
  //           department.d_employees.map((employee) => {
  //             if (employee.e_username == email && employee.e_password == pass) {
  //               window.localStorage.setItem(
  //                 "employeeData",
  //                 JSON.stringify(employee)
  //               );
  //               navigate("/employee-dashboard");
  //               console.log(window.localStorage.getItem("employeeData"));
  //             } else {
  //               alert("invalid credentials");
  //             }
  //           });
  //         }
  //       });
  //     }
  //   });
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    companyData.map((company) => {
      if (company.c_head_username == email && company.c_head_password == pass) {
        window.localStorage.setItem("companyData", JSON.stringify(company));
        navigate("/company-head-dashboard");
        console.log(window.localStorage.getItem("companyData"));
      }
      company.departments.map((department) => {
        if (
          department.d_head_username == email &&
          department.d_head_password == pass
        ) {
          window.localStorage.setItem(
            "departmentData",
            JSON.stringify(department)
          );
          navigate("/department-head-dashboard");
          console.log(window.localStorage.getItem("departmentData"));
        }
        department.d_employees.map((employee) => {
          if (employee.e_username == email && employee.e_password == pass) {
            window.localStorage.setItem(
              "employeeData",
              JSON.stringify(employee)
            );
            navigate("/employee-dashboard");
            console.log(window.localStorage.getItem("employeeData"));
          }
        });
      });
    });
  };

  //     else {
  //       company.departments.map((department) => {
  //         if (
  //           department.d_head_username == email &&
  //           department.d_head_password == pass
  //         ) {
  //           window.localStorage.setItem(
  //             "departmentData",
  //             JSON.stringify(department)
  //           );
  //           navigate("/department-head-dashboard");
  //           console.log(window.localStorage.getItem("departmentData"));
  //         } else {
  //           department.d_employees.map((employee) => {
  //             if (employee.e_username == email && employee.e_password == pass) {
  //               window.localStorage.setItem(
  //                 "employeeData",
  //                 JSON.stringify(employee)
  //               );
  //               navigate("/employee-dashboard");
  //               console.log(window.localStorage.getItem("employeeData"));
  //             } else {
  //               alert("invalid credentials");
  //             }
  //           });
  //         }
  //       });
  //     }
  //   });
  // };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
          sx={{
            backgroundImage: "url(./assets/signin-bg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 3,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="assets/lmsLogo.jpeg"
              alt="lms-logo"
              style={{ width: "150px", marginBottom: "20px" }}
            />
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            </Avatar> */}
            <Typography component="h1" variant="h5" gutterBottom>
              LEAVE MANAGEMENT SYSTEM
            </Typography>
            <Typography component="h1" variant="h6" textAlign="left">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                {/* <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid> */}
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
