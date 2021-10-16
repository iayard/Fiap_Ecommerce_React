import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Cart from "./page/Cart";
import Home from "./page/Home";
import ProductDetails from "./page/ProductDetails";

function Routes() {
  let title = "My Store";

  return (
    <BrowserRouter>
      <TopBar title={title} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:id">
          <ProductDetails />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;