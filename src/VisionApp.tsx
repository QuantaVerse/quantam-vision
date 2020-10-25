import React from "react";
import "./assets/styles/VisionApp.scss";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import WatchDog from "./pages/WatchDog";
import DataHound from "./pages/DataHound";
import Parrot from "./pages/Parrot";
import NotFound from "./pages/NotFound";
import { NotFoundComponentType, RouteEnum } from "./common/enums";
import visionLogo from "./assets/images/vision-logo.svg";

function VisionApp() {
    return (
        <Router>
            <div className="vision-app">
                <div className="top-navbar">
                    <div className="vision-icon-div">
                        <div className="vision-icon">
                            <img src={visionLogo} className="vision-app-logo" alt="logo" />
                        </div>
                        <div className="vision-text">
                            <span className="vision-text-span">Vision</span>
                        </div>
                    </div>
                    <div className="vision-module-selector">
                        <Link to={RouteEnum.DataHoundRoute}>Data Hound</Link>
                        <Link to={RouteEnum.WatchDogRoute}>Watch Dog</Link>
                        <Link to={RouteEnum.ParrotRoute}>Parrot</Link>
                    </div>
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
                    <Route path={RouteEnum.OtherRoute}>
                        <NotFound componentType={NotFoundComponentType.Page} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default VisionApp;
