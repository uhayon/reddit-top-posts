import React from 'react';
import './spinner.styles.scss';

const Spinner = ({ color = '#000', backgroundColor = 'rgba(255, 255, 255, 0.5)' }) => {
  return (
    <div style={{ backgroundColor }} className='spinnerContainer'>
      <svg className='spinner' height='50%' width='50%' viewBox='0 0 66 66' xmlns='http://www.w3.org/2000/svg'>
        <circle className='path' fill='none' stroke={color} strokeWidth='6' strokeLinecap='round' cx='33' cy='33' r='30'></circle>
      </svg>
    </div>
  );
};

export default Spinner;
