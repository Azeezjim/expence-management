import React from "react";
import {
  TestField,
  Grid,
  Select,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";

import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subTitle" gutterBottom>
          ...
        </Typography>
      </Grid>

      <Grid item xm={6}>
        <FormControl fullWidth>
          <inpuytLabel>Type</inpuytLabel>
          <Select>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <inpuytLabel>Catigory</inpuytLabel>
          <Select>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="salaty">Salaty</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <TextField type="number" label="Amount" fullWidth></TextField>
      </Grid>

      <Grid item xs={12}>
        <TextField type="date" label="Date" fullWidth></TextField>
      </Grid>
    </Grid>
  );
};

export default Form;
