import React from 'react';

function InputBoard(props) {
  const { onSubmit } = props;

  const [weight, setWeight] = React.useState('');
  const [height, setHeight] = React.useState('');

  return (
    <div>
      <label>Weight (kg): </label>
      <input type="number" value={ weight } onChange={ e => { setWeight(e.target.value) } } step="any"/>
      <br />
      <br />
      <label>Height (m): </label>
      <input type="number"  value={ height } onChange={ e => { setHeight(e.target.value) } } step="any"/>
      <br />
      <br />
      <button onClick={ () => onSubmit(weight, height) }>Submit</button>
    </div>
  );
}

export default InputBoard;
