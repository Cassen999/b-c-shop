import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './LandingPage.css';
import { makeStyles, Grid, Paper } from '@material-ui/core';
import polyphia from '../../album-art/polyphia.jpeg';
import abbath from '../../album-art/abbath.jpeg';
import acdc from '../../album-art/ac:dc.jpeg';
import bbking from '../../album-art/bbking.jpeg';
import beethoven from '../../album-art/beethoven.jpeg';
import blksbth from '../../album-art/blksbth.jpg';
import bongzilla from '../../album-art/bongzilla.jpeg';
import cancorpse from '../../album-art/cancorpse.jpeg';
import daftpunk from '../../album-art/daftpunk.jpg';
import darude from '../../album-art/darude.jpg';
import dgillespie from '../../album-art/dgillespie.jpeg';
import gwar from '../../album-art/gwar.jpeg';
import him from '../../album-art/him.jpg';
import korn from "../../album-art/korn.jpeg";
import milesdavis from '../../album-art/milesdavis.jpeg';
import toucheamore from '../../album-art/toucheamore.jpeg';
import wiib from '../../album-art/wiib.jpeg';




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

  const renderAlbum = (art) => {
    switch (art) {
      case 1:
        return(<img src={polyphia}></img>) ;
      case 2:
        return (<img src={korn}></img>);
      case 20:
        return (<img src={abbath}></img>);
      case 21:
        return (<img src={acdc}></img>);
      case 22:
        return (<img src={blksbth}></img>);
      case 23:
        return (<img src={bongzilla}></img>);
      case 24:
        return (<img src={cancorpse}></img>);
      case 25:
        return (<img src={wiib}></img>);
      case 26:
        return (<img src={gwar}></img>);
      case 27:
          return (<img src={him}></img>);
      case 28:
        return (<img src={milesdavis}></img>);
      case 29:
        return (<img src={dgillespie}></img>);
      case 30:
        return (<img src={beethoven}></img>);
      case 31:
        return (<img src={bbking}></img>);
      case 32:
        return (<img src={daftpunk}></img>);
      default:
          return "no album art"
    }
  }

  return (
    <div className = {classes.root}>
      <h1>New Releases</h1>
      <Grid container spacing={3}>
        {albums.map((album) => {
          return(
            <>
              <Grid item xs={3} key={album.id}>
                <Paper className={classes.paper}
                  onClick={() => handleAlbumClick(album.id)}>
                    {album.name} Price: {album.price}
                    {renderAlbum(album.id)}
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