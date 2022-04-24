import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'

import useStyles from './styles'

const Main = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powerd by Speechly" />
      <CardContent>
        <Typography align='center' varient='h5' >Total Balance $1100</Typography>
        <Typography variant='subtitle1' style={{ lineHeigth: "1.5em", marginTop: "20px"}}>
          {/* info card  */}
        </Typography>
        <Divider />
        {/* form  */}
      </CardContent>

      <CardContent className={classes.CardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {/* list */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main