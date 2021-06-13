import React from "react";
import { Route, Switch } from 'react-router-dom'
import Category from "./category/Category";
import Client from "./client/Client";
import Error404 from "./error/Error404";
import Main from "./main/Main";

const Routes = () => {
    return (

        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route path="/categories">
                <Category />
            </Route>
            <Route path="/clients">
                <Client />
            </Route>
            <Route>
                <Error404 />
            </Route>
        </Switch>

    )
}

export default Routes