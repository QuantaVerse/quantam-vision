import { NavLink } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import { RouteEnum } from "../../common/enums";
import { Icon } from "@material-ui/core";

const styledModuleClassName = "styled-link";
const moduleTextClassName = "module-name";
const activeModuleClassName = "active-module";
const moduleIconClassName = "module-icon";

export const StyledModuleLink = styled(NavLink).attrs({
    activeClassName: activeModuleClassName
})`
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

    &.${styledModuleClassName} {
        display: flex;
        min-width: 180px;
        width: 180px;
        border-right: 1px solid #a8d4e4;

        .${moduleTextClassName} {
            margin: auto 0 auto auto;
            padding: 0 12px;
        }
        .${moduleIconClassName} {
            margin: auto auto auto 0;
            color: #c8ae8a;
        }
    }

    &.${activeModuleClassName} {
        border-bottom: 6px solid #ff7831;
        @media (prefers-reduced-motion: no-preference) {
            .${moduleIconClassName} {
                animation: active-module-logo-spin infinite 4s linear;
            }
        }

        @keyframes active-module-logo-spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    }
`;

interface IModuleLink {
    children: string;
    to: RouteEnum;
    icon: string;
}

function ModuleLink({ children, to, icon }: IModuleLink) {
    return (
        <StyledModuleLink className={styledModuleClassName} to={to} activeClassName={activeModuleClassName}>
            <div className={moduleTextClassName}>{children}</div>
            <Icon className={moduleIconClassName}>{icon}</Icon>
        </StyledModuleLink>
    );
}

export default ModuleLink;
