import React from 'react';
import HistoryBoard from './HistoryBoard';
import InputBoard from './InputBoard';
import ResultBoard from './ResultBoard';

function BmiCalculator() {

  const [resultObj, seResultObj] = React.useState();

  const [historyArr, setHistoryArr] = React.useState([]);

  React.useEffect(
    () => {
      if (resultObj) {
        setHistoryArr((prev) => {
          return [...prev, resultObj]
        })
      }
    },
    [resultObj],
  )

  const calculateBmi = (weight, height) => {
    seResultObj(
      {
        weight,
        height,
        result: parseFloat(weight) / (parseFloat(height) * parseFloat(height)),
      }
    );
  }

  return (
    <div>
      <InputBoard onSubmit={ calculateBmi }/>
      <br />
      <ResultBoard resultObj={ resultObj }/>
      <br />
      <HistoryBoard historyArr={ historyArr }/>
    </div>
  );
}

export default BmiCalculator;
