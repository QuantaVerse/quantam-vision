import React from "react";
import UnderConstruction from "./UnderConstruction";
import { UnderConstructionComponentType } from "../common/enums";
import "../assets/styles/pagestyles/UnderConstruction.scss";

function Parrot() {
    return <UnderConstruction componentType={UnderConstructionComponentType.Page} componentName="Parrot" />;
}

export default Parrot;
