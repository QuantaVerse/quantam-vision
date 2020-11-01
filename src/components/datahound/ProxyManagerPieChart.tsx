import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import * as am4charts from "@amcharts/amcharts4/charts";

interface ProxyManagerPieChartProps {}

class ProxyManagerPieChart extends Component<ProxyManagerPieChartProps, {}> {
    async componentDidMount() {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        am4core.useTheme(am4themes_dark);
        // Themes end
        // Create chart instance
        let chart = am4core.create("pm-pie-chart-div", am4charts.PieChart);

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
        return (
            <div className="proxy-manager-pie-chart-container">
                <div id="pm-pie-chart-div" style={{ backgroundColor: "grey" }}></div>
            </div>
        );
    }
}

export default ProxyManagerPieChart;
