import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSllice";

function CounterView(props) {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment());
  };

  const resetCount = () => {
    dispatch(reset());
  };

  const decrementCount = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <div>count :{count}</div>
      <div>
        <button onClick={incrementCount} style={{ border: "1px solid red" }}>
          increment
        </button>
        <button onClick={resetCount} style={{ border: "1px solid red" }}>
          reset
        </button>
        <button onClick={decrementCount} style={{ border: "1px solid red" }}>
          decrement
        </button>
      </div>
    </div>
  );
}

export default CounterView;
