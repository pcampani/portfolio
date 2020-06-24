import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh'
  },
  grid: {
    maxWidth: '1080px',
    padding: '48px 24px 24px 24px'
  }
}))

export default function Contact({children}) {

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Grid container className={classes.grid}>
        {children}
      </Grid>
    </div>
  )
}