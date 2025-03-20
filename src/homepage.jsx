import React from 'react';
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
        <p>Welcome to home page.</p>
        <Link to='/ap'><button>About</button></Link>
        <Link to='/cp'><button>Contact</button></Link>
    </div>
    
  );
};


export default Homepage