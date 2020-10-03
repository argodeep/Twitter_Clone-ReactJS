import React from "react";
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Login from '../components/public/login';

export default function PublicRoutes() {
    return (
            <Switch>
                <Route exact={true} path="/login" component={Login} />
                <Redirect exact={true} from="/" to="/login" />
                {/* TOOD: new 404 page */}
            </Switch>
    );
}