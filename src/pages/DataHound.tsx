import React, { Component } from "react";
import axios from "axios";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "../assets/styles/pagestyles/DataHound.scss";
import SideNavBar from "../components/navbars/SideNavBar";
import StockChart from "../components/datahound/StockChart";

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

        // Themes begin
        am4core.useTheme(am4themes_animated);
        am4core.useTheme(am4themes_dark);
        // Themes end
        // Create chart instance
        let chart = am4core.create("chartdiv", am4charts.PieChart);

        // Add data
        chart.data = [
            {
                country: "Lithuania",
                litres: 501.9
            },
            {
                country: "Czech Republic",
                litres: 301.9
            },
            {
                country: "Ireland",
                litres: 201.1
            },
            {
                country: "Germany",
                litres: 165.8
            },
            {
                country: "Australia",
                litres: 139.9
            },
            {
                country: "Austria",
                litres: 128.3
            },
            {
                country: "UK",
                litres: 99
            },
            {
                country: "Belgium",
                litres: 60
            },
            {
                country: "The Netherlands",
                litres: 50
            }
        ];

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
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
                <SideNavBar />
                <div className="data-hound-info-center">
                    <div id="chartdiv" style={{ backgroundColor: "grey" }}></div>
                    <StockChart />
                </div>
            </div>
        );
    }
}

export default DataHound;
