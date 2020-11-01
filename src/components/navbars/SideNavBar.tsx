import React, { FunctionComponent } from "react";
import "../../assets/styles/componentstyles/SideNavBar.scss";

interface ISideNavBarProps {}

const SideNavBar: FunctionComponent<ISideNavBarProps> = (props) => {
    return <div className="side-navbar">{props.children}</div>;
};

export default SideNavBar;
