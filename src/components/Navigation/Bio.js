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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import mini from '../../assets/img/mini.png';
import pic from '../../assets/img/photo.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    boxShadow: 'none'
  },
  media: {
    height: '200px'
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
  },
}));

export default function Resume() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="photo" className={classes.avatar} src={pic} alt='Philip Campani'/>
        }
        title="Philip Campani"
        subheader="Web Developer"
      />
      <CardMedia
        className={classes.media}
        image={mini}
        title="Philip Campani"
      />
      <CardContent>
      <Typography variant="h6" color="textPrimary" component="p">
          Tech Stack
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          React, NodeJS, Webpack, Python, SQL, MongoDB, Firebase
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        </IconButton>
      </CardActions>
    </Card>
  );
}
