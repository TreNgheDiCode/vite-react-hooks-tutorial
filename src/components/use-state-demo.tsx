import { Counter, CounterFunction } from "../demonstrate/state";

export const UseStateDemo = () => {
  return (
    <>
      {/* Class */}
      <Counter count={0} />

      {/* Function */}
      <CounterFunction />
    </>
  );
};
