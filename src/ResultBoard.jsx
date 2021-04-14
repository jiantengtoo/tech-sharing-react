import React from 'react';

function ResultBoard(props) {
  const { resultObj } = props;

  if (resultObj === undefined) {
    return null
  }

  let range = 'obese';

  if (resultObj.result < 18.5) {
    range = 'underweight'
  } else if (resultObj.result < 24.9) {
    range = 'healthy'
  } else if (resultObj.result < 29.9) {
    range = 'overweight'
  } 

  return (
    <div style={ { border: '1px solid red' } }>
      { resultObj.weight } kg
      <br />
      { resultObj.height } m
      <br />
      { resultObj.result.toFixed(2) }
      <br />
      You are { range }!
    </div>
  );
}

export default ResultBoard;
