import { Component, useEffect, useState } from "react";

interface WindowSizeListState {
  windowWidth: number;
}

class WindowSizeList extends Component<
  { windowWidth: number },
  WindowSizeListState
> {
  constructor(props: { windowWidth: number }) {
    super(props);

    this.state = {
      windowWidth: props.windowWidth,
    };
  }

  updateWindowWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount(): void {
    window.addEventListener("resize", this.updateWindowWidth.bind(this));
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.updateWindowWidth.bind(this));
  }

  render() {
    return (
      <>
        <h2>Window Size List Class</h2>
        <p>
          WindowSizeList is a class component that demonstrates the use of
          lifecycle methods in React.
        </p>
        <p>
          It has a state variable called windowWidth which is initialized to the
          current window width.
        </p>
        <p>
          It has a method called updateWindowWidth that updates the windowWidth
          state variable.
        </p>
        <p>
          It has three lifecycle methods:
          <ul>
            <li>
              componentDidMount: Adds an event listener for the resize event.
            </li>
            <li>
              componentWillUnmount: Removes the event listener for the resize
              event.
            </li>
          </ul>
        </p>
        <div>Window Width: {this.state.windowWidth}</div>
      </>
    );
  }
}

function WindowSizeFunction() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <>
      <h2>Window Size Function</h2>
      <p>
        WindowSizeFunction is a function component that demonstrates the use of
        lifecycle methods in React.
      </p>
      <p>
        It has a state variable called windowWidth which is initialized to the
        current window width.
      </p>
      <p>
        It has a method called updateWindowWidth that updates the windowWidth
        state variable.
      </p>
      <p>
        It has a useEffect hook that adds an event listener for the resize event
        and removes it when the component is unmounted.
      </p>

      <div>Window Width: {windowWidth}</div>
    </>
  );
}

function UseEffectFetchData() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("albums")}>Albums</button>
        <button onClick={() => setResourceType("users")}>Users</button>
      </div>
      <h1>This is {resourceType}</h1>
      {items.map((item, index) => {
        return <pre key={index}>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export { WindowSizeList, WindowSizeFunction, UseEffectFetchData };
