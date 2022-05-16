import React from 'react'
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTransaction from '../../useTransaction';

// eslint-disable-next-line no-unused-vars
import useStyles from "./styles"


const Details = ( { title } ) => {
  const classes = useStyles();
  const { total, chatData } = useTransaction(title)

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography> 
        <Doughnut data={chatData} />
      </CardContent>
    </Card>
  )
}

export default Details
