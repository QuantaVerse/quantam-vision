import React from "react";
import "./assets/styles/VisionApp.scss";
import { BrowserRouter as Router, NavLink, Route, Switch, Redirect } from "react-router-dom";
import WatchDog from "./pages/WatchDog";
import DataHound from "./pages/DataHound";
import Parrot from "./pages/Parrot";
import NotFound from "./pages/NotFound";
import { NotFoundComponentType, RouteEnum } from "./common/enums";
import visionLogo from "./assets/images/vision-logo.svg";
import ModuleLink from "./components/links/ModuleLink";

function VisionApp() {
    return (
        <Router>
            <div className="vision-app">
                <div className="top-navbar">
                    <NavLink to={RouteEnum.DefaultRoute} className="vision-link">
                        <div className="vision-icon-div">
                            <div className="vision-icon">
                                <img src={visionLogo} className="vision-app-logo" alt="logo" />
                            </div>
                            <div className="vision-text">
                                <span className="vision-text-span">Vision</span>
                            </div>
                        </div>
                    </NavLink>
                    <div className="vision-module-selector">
                        <ModuleLink to={RouteEnum.DataHoundRoute} icon="support">
                            Data Hound
                        </ModuleLink>
                        <ModuleLink to={RouteEnum.WatchDogRoute} icon="offline_bolt">
                            Watch Dog
                        </ModuleLink>
                        <ModuleLink to={RouteEnum.ParrotRoute} icon="swap_horizontal_circle">
                            Parrot
                        </ModuleLink>
                    </div>
                </div>

                <Switch>
                    <Redirect from={RouteEnum.DefaultRoute} to={RouteEnum.DataHoundRoute} exact={true} />
                    <Route path={RouteEnum.DataHoundRoute}>
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
