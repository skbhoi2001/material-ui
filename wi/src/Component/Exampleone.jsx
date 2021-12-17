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

// CSS in JS
// React Native
const useStyles = makeStyles({
  paper: {
    height: "12rem",
    margin: "2rem",
    padding: "1rem"
  }
});

function Exampleone() {
  const [state, setState] = React.useState(false);
  const [select, setSelect] = React.useState(1);
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className="App">
      <Modal open={state} onClose={() => setState(false)}>
        <Paper className={classes.paper}>
          <Box>Modal</Box>
        </Paper>
      </Modal>
      <Box>
        <Button>Text</Button>
      </Box>
      <Box>
        <TextField
          onChange={(e) => console.log(e.target.value)}
          label="Name"
          placeholder="add something"
          variant="filled"
        />
      </Box>
      <Box mt={5} py={2}>
        <Checkbox
          checked={state}
          onClick={() => setState(!state)}
          color="secondary"
        />
      </Box>
      <Box>
        <Select
          value={select}
          onChange={(e) => setSelect(e.target.value)}
          label="1"
        >
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
        </Select>
      </Box>
      <div>
        <Button variant="text">Text</Button>
      </div>
      <div>
        <Button variant="outlined">Text</Button>
      </div>
      <div>
        <Button variant="contained">Text</Button>
      </div>
      <div>
        <Button
          startIcon={<UploadIcon />}
          endIcon={<UploadIcon />}
          size="large"
          variant="contained"
        >
          Text
        </Button>
      </div>
    </Container>
  );
}

export { Exampleone };
