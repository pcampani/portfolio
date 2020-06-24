import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom'

import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  navbar: {
    width: '1080px'
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  menubar: {
    display: 'flex',
    alignItems: 'center',
  },
  menuTitle: {
    paddingRight: '1rem'
  }
}));

function Nav({location}) {
  const classes = useStyles();
  const path = extractPath(location.pathname);

  function extractPath(loc) {
    const str = loc.split('/')[1];
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  }

  return (
    <AppBar position="static" className={classes.root}>
      <div className={classes.navbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">
            {path ? path : 'PC'}
          </Typography>
          <div className={classes.menubar}>
            <p className={classes.menuTitle}>Menu</p>
            <Sidebar />
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
}

export default withRouter(Nav);
