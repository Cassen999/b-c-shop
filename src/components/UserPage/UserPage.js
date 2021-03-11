import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

function UserPage (props) {

  
  const [state, setState] = useState({
    title: 'This is the user landing page',
    body: 'This is the body of my hook state'
  })

  const dispatch = useDispatch();

  useEffect(() => {
    fetchMailingAddress();
    fetchBillingAddress();
  }, []);

  const fetchMailingAddress = () => {
    dispatch({type: 'FETCH_MAILING_ADDRESS'})
  };

  const fetchBillingAddress = () => {
    dispatch({type: 'FETCH_BILLING_ADDRESS'})
  };

  const { title, body } = state;

  return (
    
    <div>
      <h1 id="welcome">Welcome, {props.store.user.username}! {title}</h1>
      <p>Your ID is: {props.store.user.id}</p>
      
      <LogOutButton className="log-in" />
    </div>
  );
}

export default connect(mapStoreToProps)(UserPage);
