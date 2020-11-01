import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { DataHoundRouteEnum } from "../../common/enums";
import { Icon } from "@material-ui/core";
import React from "react";

const styledSubModuleClassName = "styled-sub-module-link";
const subModuleTextClassName = "sub-module-name";
const activeSubModuleClassName = "active-sub-module";
const subModuleIconClassName = "sub-module-icon";

export const StyledSideLink = styled(NavLink)`
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: white;
    }

    &.${styledSubModuleClassName} {
        display: flex;
        flex-direction: column;
        min-width: 174px;
        width: 174px;
        min-height: 60px;
        padding: 18px 0;
        border-left: 6px solid transparent;
        border-bottom: 1px solid #a8d4e4;

        .${subModuleTextClassName} {
            margin: auto;
            padding: 0 12px;
            color: #7f695e;
        }
        .${subModuleIconClassName} {
            margin: auto;
            color: #7f695e;
        }
    }

    &.${activeSubModuleClassName} {
        border-left: 6px solid #ff7831;
        .${subModuleTextClassName} {
            color: white;
        }
        .${subModuleIconClassName} {
            color: white;
        }
    }
`;

interface ISideLink {
    children: string;
    to: DataHoundRouteEnum;
    icon: string;
}

function SideLink({ children, to, icon }: ISideLink) {
    return (
        <StyledSideLink className={styledSubModuleClassName} to={to} activeClassName={activeSubModuleClassName}>
            <Icon className={subModuleIconClassName}>{icon}</Icon>
            <div className={subModuleTextClassName}>{children}</div>
        </StyledSideLink>
    );
}

export default SideLink;
