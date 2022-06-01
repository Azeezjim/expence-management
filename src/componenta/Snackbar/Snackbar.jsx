import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert'

import useStyle from './styles'

const CustomizeSnackbar = (open, setOpen) => {
  const classses = useStyle()
  const handleClose = (event, reason) => {
      if( reason === 'clickaway') return;

      setOpen(false)
    }
  return (
    <div className={classses.root}>
      <Snackbar
        anchorOrigin={{ vertical:'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={3000}
        onClick={handleClose}
      >
        <MuiAlert onClick={handleClose} security= 'success' elevation={6} varient="filled">
          Transaction successfully created
        </MuiAlert>
      </Snackbar>
    </div>
  )
}

export default CustomizeSnackbar
