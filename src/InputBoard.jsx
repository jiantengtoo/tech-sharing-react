import React from 'react';

function InputBoard(props) {
  const { onSubmit } = props;

  const [weight, setWeight] = React.useState();
  const [height, setHeight] = React.useState();

  return (
    <div>
      <label>Weight (kg): </label>
      <input type="number" onChange={ e => { setWeight(e.target.value) } }/>
      <br />
      <br />
      <label>Height (m): </label>
      <input type="number" onChange={ e => { setHeight(e.target.value) } }/>
      <br />
      <br />
      <button onClick={ () => onSubmit(weight, height) }>Submit</button>
    </div>
  );
}

export default InputBoard;
