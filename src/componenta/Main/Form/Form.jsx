import React, {} from "react";
import {
  Grid,
  Select,
  Button,
  Typography,
  FormControl,
  InputLabel,
  MenuItem, 
  TextField,
} from "@material-ui/core";

import useStyles from "./styles";

const initialState ={
  amount: "",
  catigory: "",
  type: "",
  adte: new Date(),
}

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
          <InputLabel>Type</InputLabel>
          <Select>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Catigory</InputLabel>
          <Select>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="salaty">Salaty</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField type="number" label="Amount" fullWidth></TextField>
      </Grid>

      <Grid item xs={6}>
        <TextField type="date" label="Date" fullWidth></TextField>
      </Grid>
      <Button className={classes.button} variant="outlined" color="primary" fullWidth>Create</Button>
    </Grid>
  );
};

export default Form;
