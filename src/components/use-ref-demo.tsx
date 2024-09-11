import { useEffect, useRef, useState } from "react";

export const UseRefDemo = () => {
  const [value, setValue] = useState("");
  const prevValue = useRef("");

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>The value of the input is: {value}</p>
      <p>The previous value of the input is: {prevValue.current}</p>
    </>
  );
};
