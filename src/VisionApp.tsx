import React from "react";
import "./assets/styles/VisionApp.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WatchDog from "./components/ChartSample";
import DataHound from "./pages/ProxyManager";

function VisionApp() {
    return (
        <Router>
            <div className="vision-app">
                <div className="top-navbar">
                    <Link to="/datahound">Data Hound</Link>
                    <Link to="/watchdog">Watch Dog</Link>
                </div>

                <Switch>
                    <Route path="/datahound">
                        <DataHound />
                    </Route>
                    <Route path="/watchdog">
                        <WatchDog />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default VisionApp;
