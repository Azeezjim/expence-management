import React, { useContext, useState, useEffect } from "react";
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
import { ExpenseTrackerContext } from "../../../context/context";
import { v4 as uuidv4 } from "uuid";
import { incomeCategories, expenseCategories } from "../../../constants/categories";
import formatDate from "../../../utils/formatDate";
import { useSpeechContext } from "@speechly/react-client";


import useStyles from "./styles";
import { AirlineSeatLegroomNormalTwoTone } from "@material-ui/icons";

const initialState = {
  amount: "",
  category: "",
  type: "",
  date: formatDate(new Date()),
};

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const { segment } = useSpeechContext()

  const createTransaction = () => {
    const transaction = { 
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    addTransaction(transaction);
    setFormData(initialState);

    // addTransaction(); 
  };

  useEffect() = () => {
    if(segment) {
      if(segment.intent.intent === "add_expense"){
        setFormData({ ...formData, type: "Expense"});
      }
    }
  }, [segment]}

  const selectedCaregories = formData.type === 'Income' ?  incomeCategories : expenseCategories; 

  // console.log("formData", formData);y
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          {segment && segment.words.map((w) => w.value).join(" ")}
        </Typography>
      </Grid>

      <Grid item xm={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            { selectedCaregories.map((c) => 
            <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>
            )}
            {/* <MenuItem value="business">Business</MenuItem>
            <MenuItem value="salaty">Salaty</MenuItem> */}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          fullWidth
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        ></TextField>
      </Grid>

      <Grid item xs={6}>
        <TextField
          type="date"
          label="Date"
          fullWidth
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })}
        ></TextField>
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth 
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
