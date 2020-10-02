import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options: Highcharts.Options = {
    title: {
        text: "My chart"
    },
    series: [
        {
            type: "line",
            data: [1, 2, 3]
        }
    ]
};

function ChartSample(props: HighchartsReact.Props) {
    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} {...props} />
        </div>
    );
}

export default ChartSample;
