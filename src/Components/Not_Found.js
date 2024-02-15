import React from 'react';
import { Link } from 'react-router-dom';

function Not_Found() {
  return (
    <div>
      <h1>Not Found</h1>
      <Link to='/'>Back To Home</Link>
    </div>
  )
}
export default Not_Found;