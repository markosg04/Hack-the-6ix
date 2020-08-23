import React, { Component } from 'react';

import {FlexibleWidthXYPlot, XYPlot, LineSeries, YAxis, XAxis, VerticalGridLines, HorizontalGridLines, HorizontalBarSeries} from 'react-vis';

import '../../../node_modules/react-vis/dist/style.css';

import "./Analytics.css"
const blueData = [{y: 'A', x: 12, color : "#FEA4A4"}, {y: 'B', x: 2, color : "#C78BD6"}, {y: 'C', x: 11, color : "#6DACED"}, {y: 'D', x: 5, color : "#FF7269"}, {y: 'E', x: 9, color : "#F6D046"}, {y: 'F', x: 3, color : "#85CEB9"}, {y: 'G', x: 6, color : "#705BBA"}];

const myData = [{x: "January", y: 75},
{x: "Feburary", y: 35},
{x: "March", y: 45},
{x: "April", y: 55},
{x: "May", y: 15},
{x: "June", y: 75},
{x: "July", y: 45},
{x: "August", y: 55},
{x: "September", y: 15},
{x: "October", y: 5},
{x: "November", y: 85},
{x: "December", y: 45},]


class Analytics extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="content-div" style={{flexDirection : "column"}}>
                <div className="analytics-content-div" style={{margin: "40px", height : "120px"}}>
                    <div className="header-title">Analytics</div>
                    <FlexibleWidthXYPlot 
                    height={280} 
                    xType="ordinal"
                    className="patient-view-mood-graph-timeline"
                    
                    >
                            <XAxis />
                            <YAxis />
                            <LineSeries 
                            data={myData}
                            color="#85CEB9"
                            curve={'curveMonotoneX'}
                            animation="gentle"
                            animation={null}
                            />
                        
                    </FlexibleWidthXYPlot>
                </div>
                <div className="analytics-content-div" style={{margin: "40px"}}>
                    <div className="header-title">Analytics</div>
                    <FlexibleWidthXYPlot yType="ordinal" height={280}>
                        <XAxis />
                        <YAxis />
                        <HorizontalBarSeries barWidth={0.15} data={blueData} colorType={"literal"} colorRange={["#FEA4A4", "#C78BD6", "#6DACED", "#FF7269", "#F6D046", "#85CEB9", "#705BBA"]}/>
                        {/* <LabelSeries data={labelData} getLabel={d => d.x} /> */}
                    </FlexibleWidthXYPlot>
                </div>
            </div>
        );
    }
}
 
export default Analytics;