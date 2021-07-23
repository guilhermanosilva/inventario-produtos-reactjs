import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Client from "./pages/Client";
import Product from "./pages/Product";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/client" component={Client} />
        <Route path="/product" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
