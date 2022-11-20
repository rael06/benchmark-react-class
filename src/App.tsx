import React from "react";
import Page from "./pages/Page";

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <header>
          <h1>Benchmark React class</h1>
          <Page />
        </header>
      </div>
    );
  }
}

export default App;
