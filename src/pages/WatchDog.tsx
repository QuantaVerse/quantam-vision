import React from "react";
import UnderConstruction from "./UnderConstruction";
import { UnderConstructionComponentType } from "../common/enums";
import SideNavBar from "../components/navbars/SideNavBar";
import "../assets/styles/pagestyles/WatchDog.scss";

function WatchDog() {
    return (
        <div className="watchdog-module-container">
            <SideNavBar />
            <div className="watchdog-info-center">
                <UnderConstruction componentType={UnderConstructionComponentType.Page} componentName="WatchDog" />
            </div>
        </div>
    );
}

export default WatchDog;
