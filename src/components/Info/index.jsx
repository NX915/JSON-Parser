import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';

// const classnames = require('classnames');

export const Info = (props) => {

  return (
    <div className='info'>
      <p>Name of patient: </p>
      <p>Organization name: </p>
      <p>Gender: </p>
      <p>Number of conditions they have: </p>
      <p>List of all conditions: </p>
    </div>
  );
};