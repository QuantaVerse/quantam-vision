import React from "react";
import "../assets/styles/pagestyles/NotFound.scss";
import { Icon } from "@material-ui/core";
import { NotFoundComponentType, RouteEnum } from "../common/enums";
import StyledLink from "../components/links/StyledLink";

interface NFProps {
    componentType: NotFoundComponentType;
}

function NotFound({ componentType }: NFProps) {
    return (
        <div className="nf-container">
            <div className="nf-404">
                <div className="bug-icon-div">
                    <Icon className="bug-icon">bug_report</Icon>
                </div>
                <div className="nf-404-text">404</div>
            </div>
            <div className="nf-text">{componentType} not found!</div>
            {componentType === NotFoundComponentType.Page && (
                <div className="nf-redirect-div">
                    Go to <StyledLink to={RouteEnum.DefaultRoute}>Homepage</StyledLink>
                </div>
            )}
        </div>
    );
}

export default NotFound;
