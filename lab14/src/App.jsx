import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Vite + React</h1>
      <p>The current count is: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;
