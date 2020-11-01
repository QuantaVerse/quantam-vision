import React from "react";
import UnderConstruction from "./UnderConstruction";
import { UnderConstructionComponentType } from "../common/enums";
import SideNavBar from "../components/navbars/SideNavBar";
import "../assets/styles/pagestyles/Parrot.scss";

function Parrot() {
    return (
        <div className="parrot-module-container">
            <SideNavBar />
            <div className="parrot-info-center">
                <UnderConstruction componentType={UnderConstructionComponentType.Page} componentName="WatchDog" />
            </div>
        </div>
    );
}

export default Parrot;
