import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function jump5Count() {
    setCount(count + 5);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={jump5Count}>Jump 5</button>
    </div>
  );
};

export default App;
