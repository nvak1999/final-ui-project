import React from "react";
import { Route, Switch } from "react-router";

import Home from "../page/HomePage";
import Loginpage from "../page/Loginpage";
import Registerpage from "../page/Registerpage";
import ProfilePage from "../page/ProfilePage";
import Detailpage from "../page/Detailpage";
import CartPage from "../page/CartPage";
import BuyPage from "../page/Cart/Buypage";
const Homepage = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Loginpage} />
        <Route exact path="/register" component={Registerpage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/detail" component={Detailpage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/buy" component={BuyPage} />
      </Switch>
    </div>
  );
};

export default Homepage;
