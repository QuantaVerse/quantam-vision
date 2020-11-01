import React, { Component } from "react";
import axios from "axios";
import "../assets/styles/pagestyles/DataHound.scss";
import SideNavBar from "../components/navbars/SideNavBar";
import StockChart from "../components/datahound/StockChart";
import { DataHoundRouteEnum, NotFoundComponentType } from "../common/enums";
import NotFound from "./NotFound";
import { Redirect, Route, Switch } from "react-router-dom";
import SideLink from "../components/links/SideLink";
import ProxyManagerPieChart from "../components/datahound/ProxyManagerPieChart";

interface ProxyAPIStats {
    status: string;
    api_hit_rate: number | null;
}

interface IDataProxyConfig {
    openExchanges: string[];
    intraDayIntervals: string[];
    additionalConfig: Record<string, string>;
}

interface DataProxyStats {
    readonly name: string;
    readonly api_key_name: string;
    readonly proxy_config: IDataProxyConfig;
    readonly api_stats: ProxyAPIStats;
}

type ProxyStatsLedger = Record<string, DataProxyStats>;

interface ProxyManagerState {
    proxy_manager_stats: ProxyStatsLedger | null;
}

class DataHound extends Component<{}, ProxyManagerState> {
    state: Readonly<ProxyManagerState> = {
        proxy_manager_stats: null
    };

    async componentDidMount() {
        this.setState({ proxy_manager_stats: null });
        await axios
            .get<ProxyStatsLedger>("http://localhost:3000/api/v1/quantam_core/proxy_manager/stats")
            .then((resp) => {
                if (resp?.data) {
                    this.setState({ proxy_manager_stats: resp.data });
                } else {
                    console.warn(resp);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {
        const { proxy_manager_stats } = this.state;

        let proxyHitRates: [string, number | null][] = [];
        if (proxy_manager_stats !== null) {
            Object.keys(proxy_manager_stats).forEach((proxyName) => {
                proxyHitRates.push([proxyName, proxy_manager_stats[proxyName]?.api_stats?.api_hit_rate]);
            });
        }

        return (
            <div className="data-hound-module-container">
                <SideNavBar>
                    <SideLink to={DataHoundRouteEnum.DashboardRoute} icon="dashboard">
                        Dashboard
                    </SideLink>
                    <SideLink to={DataHoundRouteEnum.JobsRoute} icon="work">
                        Jobs
                    </SideLink>
                    <SideLink to={DataHoundRouteEnum.DataRoute} icon="multiline_chart">
                        Data
                    </SideLink>
                </SideNavBar>
                <div className="data-hound-info-center">
                    <Switch>
                        <Redirect
                            from={DataHoundRouteEnum.DefaultRoute}
                            to={DataHoundRouteEnum.DashboardRoute}
                            exact={true}
                        />
                        <Route path={DataHoundRouteEnum.DashboardRoute} exact={true}>
                            <div className="data-hound-dashboard-container">
                                <ProxyManagerPieChart />
                            </div>
                        </Route>
                        <Route path={DataHoundRouteEnum.JobsRoute} exact={true}>
                            Jobs
                            <StockChart />
                        </Route>
                        <Route path={DataHoundRouteEnum.DataRoute} exact={true}>
                            Data
                        </Route>
                        <Route path={DataHoundRouteEnum.OtherRoute}>
                            <NotFound componentType={NotFoundComponentType.Page} />
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default DataHound;
