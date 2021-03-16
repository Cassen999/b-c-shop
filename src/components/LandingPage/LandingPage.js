import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './LandingPage.css';
import { makeStyles, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
    margin: 'auto',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function LandingPage (props) {
  const [heading, setHeading] = useState('')
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  const albums = props.store.productsReducer; 

  useEffect(() => {
    fetchNewAlbums();
  }, []);

  const fetchNewAlbums = () => {
    dispatch({type: 'FETCH_NEW_ALBUMS'})
  }; 

  const handleAlbumClick = (id) => {
    dispatch({type: "FETCH_SELECTED", payload: id});
    history.push('/selected');
  }

  return (
    <div className = {classes.root}>
      <h1>New Releases</h1>
      <Grid container spacing={3}>
        {albums.map((album) => {
          return(
            <>
              <Grid item xs={3}>
                <Paper className={classes.paper}
                  onClick={() => handleAlbumClick(album.id)}>
                    {album.name} Price: {album.price}
                </Paper>
              </Grid>
            </>
          )
        })}
      </Grid>
    </div>
  );
}

export default connect(mapStoreToProps)(LandingPage);
