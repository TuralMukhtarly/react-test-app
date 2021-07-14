import React from "react";
import { Route, Switch } from "react-router";
import Bookmarks from "../components/Bookmarks";
import Photos from "../components/Photos";

export const PATH = {
    MAIN: "/",
    BOOKMARS:"/bookmars"
}
function Routes(props:any) {
    return (
        <div>
            <Switch>
                <Route path={PATH.MAIN} component={Photos}/>
                <Route path={PATH.BOOKMARS} component={Bookmarks}/>
            </Switch>
        </div>
    )
}

export default Routes;