import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [response, setResponse] = useState("");
  useEffect(() => {
    async function fetchStatus() {
      const { data } = await axios.get("http://localhost:9000/api");
      setResponse(data);
    }
    fetchStatus();
  }, [])
  return (
    <>
      <h1>{response}</h1>
    </>
  )
}

export default App
