import React from 'react';

function HistoryBoard(props) {
  const { historyArr } = props;

  if (historyArr.length === 0) {
    return null
  }

  return (
    <div style={ { border: '1px solid blue' } }>
      {
        historyArr.map(
          (history, index) => {
            return (
              <div key={ index }>{ history.result }</div>
            )
          }
        )
      } 
    </div>
  );

}

export default HistoryBoard;
