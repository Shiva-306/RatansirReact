import React from 'react';

function BrightText({ color }) {
  
  return (
  <h1 style={{color:color}}>This text is in {color} color</h1>
);
}

export default BrightText;
