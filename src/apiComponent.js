import React, { useState } from 'react';

const ApiCaller = () => {
  const [response1, setResponse1] = useState(null);
  const [response2, setResponse2] = useState(null);
  const [error, setError] = useState(null);

  // Function to call API 1
  const callApi1 = async () => {
    try {
      const res = await fetch('http://localhost:8081/one-service/getDetails'); // Replace with actual API URL
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      const data = await res.json();
      setResponse1(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  // Function to call API 2
  const callApi2 = async () => {
    try {
      const res = await fetch('http://localhost:8082/two-service/getDetails'); // Replace with actual API URL
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      const data = await res.json();
      setResponse2(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>API Caller</h2>
      <button onClick={callApi1}>Call API 1</button>
      <button onClick={callApi2}>Call API 2</button>
      
      <div>
        <h3>API 1 Response:</h3>
        {response1 ? <pre>{JSON.stringify(response1, null, 2)}</pre> : 'No response yet.'}
      </div>
      
      <div>
        <h3>API 2 Response:</h3>
        {response2 ? <pre>{JSON.stringify(response2, null, 2)}</pre> : 'No response yet.'}
      </div>
      
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
    </div>
  );
};

export default ApiCaller;
