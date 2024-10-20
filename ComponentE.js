import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user}-{channel}
    </div>
  );
  //the above code becomes messy when written without using usecontext the consumer code written in App.js is similar in both cases but using useContext here makes things simple and nicer.
}

export default ComponentE;
