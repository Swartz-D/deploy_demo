import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/");
      setMessage(response.data.message);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>PERN Stack Demo</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
