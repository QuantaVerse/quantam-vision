import React from "react";
import "./assets/styles/VisionApp.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WatchDog from "./pages/WatchDog";
import DataHound from "./pages/DataHound";
import Parrot from "./pages/Parrot";

export enum RouteEnum {
    DefaultRoute = "/",
    DataHoundRoute = "/datahound",
    WatchDogRoute = "/watchdog",
    ParrotRoute = "/parrot"
}

function VisionApp() {
    return (
        <Router>
            <div className="vision-app">
                <div className="top-navbar">
                    <Link to={RouteEnum.DataHoundRoute}>Data Hound</Link>
                    <Link to={RouteEnum.WatchDogRoute}>Watch Dog</Link>
                    <Link to={RouteEnum.ParrotRoute}>Parrot</Link>
                </div>

                <Switch>
                    <Route path={[RouteEnum.DefaultRoute, RouteEnum.DataHoundRoute]} exact={true}>
                        <DataHound />
                    </Route>
                    <Route path={RouteEnum.WatchDogRoute} exact={true}>
                        <WatchDog />
                    </Route>
                    <Route path={RouteEnum.ParrotRoute} exact={true}>
                        <Parrot />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default VisionApp;
