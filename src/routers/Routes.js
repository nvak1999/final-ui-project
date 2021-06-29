import React from "react";
import { Switch, Route } from "react-router-dom";
import Loginpage from "../page/Loginpage";
import Registerpage from "../page/Registerpage";
import Homepage from "./Homepage";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Loginpage} />
      </Switch>
    </div>
  );
};

export default Routes;
