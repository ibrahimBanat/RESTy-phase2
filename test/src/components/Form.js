import React, { useState, setState } from 'react';
import axios from 'axios';
import '../design/Form.scss';

const Form = props => {
  const [option, setOption] = useState('GET');
  const [url, setUrl] = useState('');
  //   const [response, setResponse] = useState();

  const handleSubmit = async e => {
    e.preventDefault();

    let response = await axios({
      method: option,
      url: url,
    });
    props.afterSubmit(response.headers, response.request.response);
  };
  return (
    <div className='form' onSubmit={handleSubmit}>
      <form>
        <select onChange={e => setOption(e.target.value)}>
          <option value='GET'>GET</option>
          <option value='POST'>POST</option>
          <option value='PUT'>PUT</option>
          <option value='DELETE'>DELETE</option>
        </select>
        <input
          type='URL'
          name='link'
          onChange={event => setUrl(event.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
      {/* <ReactJson src={} /> */}
    </div>
  );
};

export default Form;
