import Button from "@mui/material/Button";
import UploadIcon from "@mui/icons-material/Upload";
import "../styles.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

// CSS in JS
// React Native
const useStyles = makeStyles({
  paper: {
    height: "12rem",
    margin: "2rem",
    padding: "1rem"
  }
});

function Exampletwo() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className="App">
      <Grid container spacing={2}>
        <Grid sm={12} md={6} lg={4} xl={3} item>
          <Paper className={classes.paper}>1</Paper>
        </Grid>
        <Grid sm={12} md={6} lg={4} xl={3} item>
          <Paper className={classes.paper}>2</Paper>
        </Grid>
        <Grid sm={12} md={6} lg={4} xl={3} item>
          <Paper className={classes.paper}>3</Paper>
        </Grid>
        <Grid sm={12} md={6} lg={4} xl={3} item>
          <Paper className={classes.paper}>4</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export { Exampletwo };
