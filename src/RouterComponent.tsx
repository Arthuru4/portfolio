import React from "react";
import { Switch, Route } from "react-router-dom";
import * as routes from "./routes";

const RouterComponent = () => {
    return (
        <Switch>
            <Route {...routes.HomeRoute} />
            <Route {...routes.NotesRoute} />
            <Route {...routes.ContactsRoute} />
            <Route {...routes.NoMatchRoute} />
        </Switch>
    );
};

export default RouterComponent;
