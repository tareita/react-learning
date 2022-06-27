import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div>
      <button onClick={incrementCounter}>Click me</button>
      <div>
        counter: <span>{count}</span>
      </div>
    </div>
  );
}

export default Counter;
