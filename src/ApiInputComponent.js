import React, { useState } from "react";

const ApiInputComponent = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [response1, setResponse1] = useState(null);
  const [response2, setResponse2] = useState(null);

  // Handler for the first API call
  const handleApiCall1 = async () => {
    try {
      const res = await fetch(`'http://localhost:8081/one-service/getInput/${input1}`);
      const data = await res.json();
      setResponse1(data);
    } catch (error) {
      console.error("Error calling API 1:", error);
      setResponse1("Failed to fetch data.");
    }
  };

  // Handler for the second API call
  const handleApiCall2 = async () => {
    try {
      const res = await fetch(`http://localhost:8082/two-service/getInput/${input2}`);
      const data = await res.json();
      setResponse2(data);
    } catch (error) {
      console.error("Error calling API 2:", error);
      setResponse2("Failed to fetch data.");
    }
  };

  return (
    <div>
      <h1>API Caller</h1>
      {/* Input for API 1 */}
      <div>
        <label>Input for API 1:</label>
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <button onClick={handleApiCall1}>Call API 1</button>
        {response1 && <pre>Response 1: {JSON.stringify(response1, null, 2)}</pre>}
      </div>

      {/* Input for API 2 */}
      <div>
        <label>Input for API 2:</label>
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <button onClick={handleApiCall2}>Call API 2</button>
        {response2 && <pre>Response 2: {JSON.stringify(response2, null, 2)}</pre>}
      </div>
    </div>
  );
};

export default ApiInputComponent;