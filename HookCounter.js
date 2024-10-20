import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0); // this syntax is called array destructuring which is a feature in es6

  //   function clickHandler() {
  //     setCount(count + 1);
  //   }

  const clickHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={clickHandler}>Count- {count}</button>
    </div>
  );
}

export default HookCounter;
