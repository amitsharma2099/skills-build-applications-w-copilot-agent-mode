import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Welcome to OctoFit Tracker!');

  useEffect(() => {
    setMessage('OctoFit Tracker is ready on port 5173.');
  }, []);

  return (
    <main className="app-shell">
      <h1>OctoFit Tracker</h1>
      <p>{message}</p>
      <p>Build your workout tracker with React 19, Vite, and a TypeScript backend.</p>
    </main>
  );
}

export default App;
