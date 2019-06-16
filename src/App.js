// Imports Bibliotecas
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Imports Pages
import Login from "./pages/Login";
import Feed from "./pages/Feed";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/feed" component={Feed} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
