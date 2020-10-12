import React ,{useContext,useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import {userContext} from '../ContextApi'
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles({
  root: {
    
    width: '30%',
    margin : '20px',
    backgroundColor: 'black',
    color:'yellow',
    border: '1px solid darkgrey',
    boxSizing:'border-box'
  },
  media: {
    height: 540,

  },
  colorButton : {
      backgroundColor:"white",
      '&:hover': {
        backgroundColor: 'white'
     }
      
  },
  active : {
    backgroundColor : 'red',
    '&:hover': {
      backgroundColor: 'red'
   }
  },
 descColor : {
   color : 'white'
 }
});

export default function ShowCard({show,image,name,description,remove,active}) {
  const classes = useStyles();
  const [added,setAdded] = useState(false)
  const summary = description.replace( /(<([^>]+)>)/ig, '');
  const [state,setState] = useContext(userContext)
  const {favourites} = state


  const addToFavourite = () => {
     if (!favourites.includes(show)) {
      setAdded(true)
    setState({...state,favourites : [...favourites,show]})
   
     }
     else {
      setAdded(true)
     }
  }

  const removeFavourite = () => {
    const updateFav = favourites.filter((item) => item!==show)
    setState({...state,favourites: updateFav})
    setAdded(false)
 

  }
 
  return (
    <Card className={classes.root}>
       
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.descColor} variant="body2" component="p">
           {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton className={active || added ?  classes.active : classes.colorButton } aria-label="add to favorites" title="favourite" onClick={addToFavourite}>
          <FavoriteIcon />
        </IconButton>
        { remove && 
        <IconButton className={classes.colorButton} aria-label="remove from favorites" title="Remove favourite" onClick={removeFavourite}>
          <DeleteIcon/>       
        </IconButton>

        }
      </CardActions>
    
      

    </Card>
  );

}

