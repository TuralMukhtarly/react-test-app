import React from "react";
import { Route, Switch } from "react-router-dom";
import Bookmarks from "../components/Bookmarks";
import Photos from "../components/Search";
import { PATH } from "./path";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path={PATH.MAIN} component={Photos} />
        <Route path={PATH.BOOKMARS} component={Bookmarks} />
      </Switch>
    </div>
  );
}

export default Routes;
