import React, { Component } from "react";
/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import am4themes_animated from "@amcharts/amcharts4/themes/animated";

interface StockChartProps {}

class StockChart extends Component<StockChartProps, {}> {
    constructor(props: StockChartProps) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <div className="stock-chart-container">
                <div id="controls"></div>
                <div id="stockchartdiv"></div>
            </div>
        );
    }
}

export default StockChart;
