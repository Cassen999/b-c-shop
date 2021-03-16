import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

function TemplateFunction(props) {
  const [heading, setHeading] = useState('Admin');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default connect(mapStoreToProps)(TemplateFunction);