import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Counter</h3>
      <p>count:{count}</p>
      <p>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </p>
    </div>
  );
};

export default Counter;
