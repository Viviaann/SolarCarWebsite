import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import { BrowserRouter as Router, Route } from "react-router-dom";

// Your top level component
import App from "./App";
import Team from "./Team";

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== "undefined") {
  const target = document.getElementById("root");

  const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/team" component={Team} />
      </div>
    </Router>
  );
  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render;

  const render = Comp => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      target
    );
  };

  // Render!
  //render(App);
  ReactDOM.render(routing, document.getElementById("root"));

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept("./App", () => {
      render(App);
    });
  }
}
