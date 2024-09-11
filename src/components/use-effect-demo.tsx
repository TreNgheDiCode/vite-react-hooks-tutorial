import {
  UseEffectFetchData,
  WindowSizeFunction,
  WindowSizeList,
} from "../demonstrate/effect";

export const UseEffectDemo = () => {
  return (
    <>
      {/* Class */}
      <WindowSizeList windowWidth={window.innerWidth} />

      {/* Function */}
      <WindowSizeFunction />
      {/* <UseEffectFetchData /> */}
    </>
  );
};
