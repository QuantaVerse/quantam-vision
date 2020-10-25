import React from "react";
import { Icon } from "@material-ui/core";
import { UnderConstructionComponentType } from "../common/enums";

interface UCProps {
    componentType: UnderConstructionComponentType;
    componentName: string;
}

function UnderConstruction({ componentType, componentName }: UCProps) {
    return (
        <div className="uc-container">
            <div className="uc-404">
                <div className="uc-icon-div">
                    <Icon className="uc-icon">construction</Icon>
                </div>
                <div className="uc-404-text">{componentName}</div>
            </div>
            <div className="uc-text">{componentType} under construction!</div>
        </div>
    );
}

export default UnderConstruction;
