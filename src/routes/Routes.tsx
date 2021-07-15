import React from "react";
import { Route, Switch } from "react-router-dom";
import Bookmarks from "../components/Bookmarks";
import Photos from "../components/Photos";

export const PATH = {
    MAIN: "/",
    BOOKMARS:"/bookmarks"
}
function Routes(props:any) {
    return (
        <div>
            <Switch>
                <Route exact path={PATH.MAIN} component={Photos}/>
                <Route path={PATH.BOOKMARS} component={Bookmarks}/>
            </Switch>
        </div>
    )
}

export default Routes;