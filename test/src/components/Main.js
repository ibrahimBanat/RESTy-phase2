import React, { useState } from 'react';
import Form from './Form';
import Result from './Result';

const Main = () => {
  const [count, setCount] = useState('');
  const [headers, setHeaders] = useState();
  const [result, setResult] = useState();

  const sendToResult = (headers, result) => {
    setCount(result.length);
    setHeaders(JSON.stringify(headers));
    setResult(result);
  };
  return (
    <div className='main'>
      <Form afterSubmit={sendToResult} />
      <Result data={{ count: count, headers: headers, result: result }} />
    </div>
  );
};

export default Main;
