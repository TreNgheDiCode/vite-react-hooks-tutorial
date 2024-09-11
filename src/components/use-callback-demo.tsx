import { useCallback, useEffect, useMemo, useState } from "react";

export const UseCallbackDemo = () => {
  const [value, setValue] = useState(0);
  const [toggle, setToggle] = useState(false);

  const getItems = useCallback(() => {
    return [value, value + 1, value + 2];
  }, [value]);

  const listItem = useMemo(() => <ListItem getItems={getItems} />, [getItems]);

  return (
    <>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      {listItem}
      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
      {toggle && <p>Component</p>}
    </>
  );
};

export const ListItem = ({ getItems }: { getItems: () => number[] }) => {
  const [items, setItems] = useState<number[]>([]);
  useEffect(() => {
    console.log("Getting items");
    setItems(getItems());
  }, [getItems]);

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
