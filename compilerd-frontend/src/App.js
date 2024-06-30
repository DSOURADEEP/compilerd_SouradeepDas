import React, { useState } from 'react';
import './App.css';

function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');

  const handleCompile = async () => {
    try {
      const response = await fetch('http://localhost:5000/compile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, language }),
      });

      const data = await response.json();
      setOutput(data.output);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Multi-Language Compiler</h1>
        <textarea
          rows="10"
          cols="50"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
        />
        <br />
        <div class="dropdown">
  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value)}
  >
    <option value="javascript">JavaScript</option>
    <option value="python">Python</option>
  </select>
</div>

        <br />
        <button onClick={handleCompile}>Compile & Run</button>
        <pre>{output}</pre>
      </header>
    </div>
    
  );
}

export default App;

