import { useMemo, useState } from "react";

export const UseMemoDemo = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const slowFunction = (value: number) => {
    // Sleep for 2 seconds
    const start = Date.now();
    while (Date.now() < start + 2000) {
      // Do nothing
    }

    return value * 2;
  };

  const doubledValue = useMemo(() => slowFunction(value), [value]);

  return (
    <>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <p>Value: {value}</p>
      <p>Double Value: {doubledValue}</p>
      <button onClick={() => setOpen((prev) => !prev)}>Show component</button>
      {open && <p>Component</p>}
    </>
  );
};
