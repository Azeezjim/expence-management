import React, { useState } from "react";
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
  // const [formData, setFormData] = useState(initialState);

  console.log("formData", formData);
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
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value})}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Catigory</InputLabel>
          <Select value={formData.catigory} onChange={(e) =>setFormData({ ...formData, catigory: e.target.value})}>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="salaty">Salaty</MenuItem>
          </Select>
        </FormControl>
      </Grid> 

      <Grid item xs={6}>
        <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e) =>setFormData({ ...formData, amount : e.target.value}) } ></TextField>
      </Grid>

      <Grid item xs={6}>
        <TextField type="date" label="Date" fullWidth value={formData.date } onChange={(e) =>setFormData({ ...formData, date: e.target.value}) }></TextField>
      </Grid>
      <Button className={classes.button} variant="outlined" color="primary" fullWidth>Create</Button>
    </Grid>
  );
};

export default Form;
