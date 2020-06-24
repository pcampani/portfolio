import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import PermPhoneMsgOutlinedIcon from '@material-ui/icons/PermPhoneMsgOutlined';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

import Bio from './Bio'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  button: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  link: {
    textDecoration: 'none',
    color: '#222',
  }
});

const Links = {
    title: ['Home', 'About', 'Blog', 'Contact'],
    icons: [<HomeOutlinedIcon/>, <ContactMailOutlinedIcon/>, <ChatBubbleOutlineOutlinedIcon/>, <PermPhoneMsgOutlinedIcon/>]
  }


export default function Sidebar() {
  const classes = useStyles();
  let [isOpen, setIsOpen] = React.useState(false);
  const [state, setState] = React.useState({
    left: false,
  });

  const handleMenu = () => {
    setIsOpen(!isOpen);
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
    handleMenu();
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {Links.title.map((text, index) => (
          <Link to={text === 'Home' ? '/' : `/${text.toLowerCase()}`} className={classes.link} key={index}>
          <ListItem button key={text}>
            <ListItemIcon>{Links.icons[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <Bio />
      <Divider />
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div onClick={toggleDrawer(anchor, true)} className={classes.button}>
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={handleMenu}
              width={30}
              height={18}
              strokeWidth={3}
              rotate={0}
              color='#fff'
              borderRadius={5}
              animationDuration={0.125}
            />
          </div>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
