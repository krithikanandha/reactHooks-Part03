import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  // const tick = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };
  const tick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  //by leaving the array empty as second variable here your tick will not increment per sec since it has to lookout or watch the variable need to give count variable in above dependency array.
  //or by keeping the array empty you can make the tick work by using prevCount in setCount method
  return <div> {count}</div>;
}

export default IntervalHookCounter;
