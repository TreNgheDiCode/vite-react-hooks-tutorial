import { ThemeProvider } from "./components/providers/theme-provider";
import { UseContextDemo } from "./components/use-context-demo";

function App() {
  return (
    <>
      {/* <UseStateDemo /> */}
      {/* <UseEffectDemo /> */}
      <ThemeProvider>
        <UseContextDemo />
      </ThemeProvider>
    </>
  );
}

export default App;
