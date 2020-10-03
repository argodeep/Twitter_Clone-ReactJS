import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Home = React.lazy(() => import('app/components/private/home'));
const Profile = React.lazy(() => import('app/components/private/profile'));
const Compose = React.lazy(() => import('app/components/private/compose'));

export default function PrivateRoutes() {
  return (
      <Switch>
        <Route exact={true} path="/home" component={Home} />
        <Route exact={true} path="/compose/tweet" component={Compose} />
        <Route exact={true} path="/:username" component={Profile} />
        <Redirect exact={true} from="/" to="/home" />
        <Redirect exact={true} from="/login" to="/home" />
        {/* TOOD: new 404 page */}
      </Switch>
  );
}