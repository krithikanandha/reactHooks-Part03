import React, { useState, useEffect } from "react";

function HookEffectCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);
  //   document.title = `You clicked ${count} times`;
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Count- {count}</button>
    </div>
  );
}

export default HookEffectCounter;
