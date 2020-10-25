import React from "react";
import "../assets/styles/pagestyles/PageNotFound.scss";
import { Icon } from "@material-ui/core";

function PageNotFound() {
    return (
        <div className="pnf-container">
            <div className="pnf-404">
                <div className="bug-icon-div">
                    <Icon className="bug-icon">bug_report</Icon>
                </div>
                <div className="pnf-404-text">404</div>
            </div>
            <div className="pnf-text">Page not found</div>
        </div>
    );
}

export default PageNotFound;
