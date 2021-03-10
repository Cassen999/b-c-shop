import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './LandingPage.css';
import RegisterForm from '../RegisterForm/RegisterForm';

class LandingPage extends Component {
  state = {
    heading: 'Class Component',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="container">
        <h2>{this.state.heading}</h2>
        <div className="grid">
          <div className="grid-col grid-col_8">
            <p>
              Lorem ipsum dolor sit amet
            </p>

            <p>
              Praesent consectetur orci dui
            </p>

            <p>
              Fusce porta diam ac tortor elementum
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
