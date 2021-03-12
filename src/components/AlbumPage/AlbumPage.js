import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

function AlbumPage(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Selected album</h2>
    </div>
  );
}

export default (AlbumPage);