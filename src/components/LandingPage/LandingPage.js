import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
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
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function LandingPage (props) {
  const [heading, setHeading] = useState('')
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    fetchNewAlbums();
  }, []);

  const fetchNewAlbums = () => {
    dispatch({type: 'FETCH_NEW_ALBUMS'})
  };

  // onLogin = (event) => {
  //   props.history.push('/login');
  // };

    return (
      <div>
        
      </div>
    );
}

export default connect(mapStoreToProps)(LandingPage);
