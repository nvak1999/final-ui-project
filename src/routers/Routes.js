import React from "react";
import { Switch, Route } from "react-router-dom";
import Loginpage from "../page/Loginpage";
import Registerpage from "../page/Registerpage";
import CartPage from "../page/Cartpage";
import Homepage from "./Homepage";
import Buypage from "../page/Cart/Buypage";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
};

export default Routes;
