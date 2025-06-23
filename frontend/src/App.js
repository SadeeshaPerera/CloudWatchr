// src/App.js
import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('Loading...');
  useEffect(() => {
    fetch('http://localhost:3001/')
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);
  return <h1>{msg}</h1>;
}

export default App;
