import React from "react";
import UnderConstruction from "./UnderConstruction";
import { UnderConstructionComponentType } from "../common/enums";

function WatchDog() {
    return <UnderConstruction componentType={UnderConstructionComponentType.Page} componentName="WatchDog" />;
}

export default WatchDog;
