import logo from "./logo.svg";
import "./App.css";
import React, { useReducer } from "react";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import HookEffectCounter from "./components/HookEffectCounter";
// import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import DataFetchingTwo from "./components/DataFetchingTwo";
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookEffectCounter /> */}
      {/* <HookMouse /> */}
      <MouseContainer />
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <DataFetchingTwo /> */}
      {/* <UserContext.Provider value={"Krithi"}>
        <ChannelContext.Provider value={"N Kumar"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
    </div>
  );
}

export default App;
