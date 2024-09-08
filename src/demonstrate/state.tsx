import { Component, useState } from "react";

interface CounterState {
  count: number;
}

// Class version of the useState demo
class Counter extends Component<{ count: number }, CounterState> {
  /**
   * @param props The initial props of the component.
   * @returns A new instance of the Counter component.
   * @description The constructor of the Counter component.
   * It initializes the state of the component.
   * @example
   * const counter = new Counter();
   * console.log(counter.state.count); // 0
   */

  constructor(props: { count: number }) {
    super(props);

    this.state = {
      count: props.count,
    };
  }

  changeCount(amount: number) {
    this.setState((prev) => ({ count: prev.count + amount }));
  }

  resetCount() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <>
        <h2>Counter Class</h2>
        <p>
          CounterClass is a class component that demonstrates the use of state
          in React.
        </p>
        <p>It has a state variable called count which is initialized to 0.</p>
        <p>It has two methods:</p>
        <ul>
          <li>
            changeCount: Increments or decrements the count by a given amount.
          </li>
          <li>resetCount: Resets the count to 0.</li>
        </ul>
        <button onClick={() => this.changeCount(-1)}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.changeCount(1)}>+</button>
        <button onClick={() => this.resetCount()}>Reset</button>
      </>
    );
  }
}

// Function version of the useState demo
const initialState = () => {
  console.log("Initial state");
  return 0;
};

function CounterFunction() {
  // In class components, state is an object.
  // In function components, state is a variable (count).
  // The setCount function is used to update the count variable, same as this.setState in class components.
  const [count, setCount] = useState(() => initialState());

  const changeCount = (amount: number) => {
    setCount((prev) => prev + amount);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <h2>Counter Function</h2>
      <p>
        CounterFunction is a function component that demonstrates the use of
        state in React.
      </p>
      <p>It has a state variable called count which is initialized to 0.</p>
      <p>It has two functions:</p>
      <ul>
        <li>
          changeCount: Increments or decrements the count by a given amount.
        </li>
        <li>resetCount: Resets the count to 0.</li>
      </ul>
      <button onClick={() => changeCount(-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => changeCount(1)}>+</button>
      <button onClick={() => resetCount()}>Reset</button>
    </>
  );
}

export { Counter, CounterFunction };
