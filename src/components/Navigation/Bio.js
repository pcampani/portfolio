import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

import mini from '../../assets/img/logo.jpg';
import pic from '../../assets/img/photo.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    boxShadow: 'none'
  },
  media: {
    
    height: '225px'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Resume() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="photo" className={classes.avatar} src={pic} alt='Philip Campani'/>
        }
        title="Philip Campani"
        subheader="Web Developer"
      />
       <Link href='https://www.freepik.com/free-photos-vectors/people' target='_blank'>
        <CardMedia
          className={classes.media}
          image={mini}
          title="People vector created by freepik - www.freepik.com"
        />
     </Link>
      <CardContent>
      <Typography variant="h6" color="textPrimary" component="p">
          Tech Stack
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          React, NodeJS, Webpack, Python, SQL, MongoDB, Firebase
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="facebook">
          <Link>
            <FacebookIcon />
          </Link>
        </IconButton>
        <IconButton aria-label="linkedin">
          <Link>
            <LinkedInIcon />
          </Link>
        </IconButton>
        <IconButton aria-label="twitter">
          <Link>
            <TwitterIcon />
          </Link>
        </IconButton>
        <IconButton aria-label="github">
          <Link href="https://github.com/pcampani" target='_blank'>
            <GitHubIcon />
          </Link>
        </IconButton>
      </CardActions>
    </Card>
  );
}
