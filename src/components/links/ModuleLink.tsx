import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import { RouteEnum } from "../../common/enums";
import { Icon } from "@material-ui/core";

export const StyledModuleLink = styled(Link)`
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: white;
        font-size: 18px;
    }
`;
interface IModuleLink {
    children: string;
    to: RouteEnum;
    icon: string;
}

function ModuleLink({ children, to, icon }: IModuleLink) {
    return (
        <StyledModuleLink className="styled-link" to={to}>
            <div className="module-name">{children}</div>
            <Icon className="module-icon">{icon}</Icon>
        </StyledModuleLink>
    );
}

export default ModuleLink;
