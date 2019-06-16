// Imports Bibliotecas
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Imports Pages
import Login from "./pages/Login";
import Feed from "./pages/Feed";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Feed} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
