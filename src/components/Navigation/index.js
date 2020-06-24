import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom'

import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    background: '#fff',
    boxShadow: 'none'
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
    paddingRight: '1rem',
    color: '#333'
  },
  title: {
    color: '#333'
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
    <AppBar className={classes.root}>
      <div className={classes.navbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
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
