import React from 'react';
import JSONPretty from 'react-json-pretty';

const Result = props => {
  let headers = { headers: props.data.headers };
  let count = { count: props.data.count };
  let results = { results: props.data.results };
  return (
    <div className='result'>
      <JSONPretty data={headers} />
      <JSONPretty data={count} />
      <JSONPretty data={results} />
    </div>
  );
};

export default Result;
