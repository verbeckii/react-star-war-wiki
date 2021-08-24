import React from 'react';

import './error-indicator.css';


const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src='https://image.flaticon.com/icons/png/512/2363/2363876.png' alt="error icon"/>
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;