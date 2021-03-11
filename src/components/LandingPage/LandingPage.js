import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './LandingPage.css';
import { withStyles, Grid } from '@material-ui/core';

class LandingPage extends Component {
  state = {
    heading: 'Class Component',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(LandingPage));
