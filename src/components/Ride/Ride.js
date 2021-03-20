import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import WcIcon from '@material-ui/icons/Wc';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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

export default function Ride({ride}){
  const classes = useStyles();
  const history = useHistory()
    const handleBook = (title) => {
        history.push(`/destination/${title}`);
    }
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {ride.avatar}
          </Avatar>
        }
        title={ride.title}
      />

      <CardMedia
        className={classes.media}
        image={ride.imgUrl}
        title="Paella dish"
      />
      <img src={`/images/${ride.title}.png`} alt=""/>
      <CardContent>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <WcIcon />: {ride.capacity} 
        </IconButton>
        <IconButton aria-label="price">
          <AttachMoneyIcon />: {ride.price} 
        </IconButton>
        <Button onClick={() => handleBook(ride.title)} variant="contained" color="primary">
            Search
        </Button>
      </CardActions>
    </Card>
  );
}
