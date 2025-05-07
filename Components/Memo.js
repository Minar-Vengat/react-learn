import React, { useState, useCallback } from "react";

const heavyCalculation = (num) => {
  console.log("Heavy calculation running...");
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }
  return total + num;
};

const HeavyComponent = React.memo(({ count, onClick }) => {
  const result = heavyCalculation(count);
  console.log("HeavyComponent rendered");
  return (
    <div>
      <h2>Heavy Count: {count}</h2>
      <p>Calculation Result: {result}</p>
      <button onClick={onClick}>Increment Heavy Count</button>
    </div>
  );
});

function App() {
  const [lightCount, setLightCount] = useState(0);
  const [heavyCount, setHeavyCount] = useState(0);

  const incrementHeavy = useCallback(() => {
    setHeavyCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>React.memo + useCallback Task</h1>

      <HeavyComponent count={heavyCount} onClick={incrementHeavy} />

      <hr />

      <h2>Light Count: {lightCount}</h2>
      <button onClick={() => setLightCount(lightCount + 1)}>Increment Light Count</button>
    </div>
  );
}
export default App;
