import React, { Component } from 'react';

import {FlexibleWidthXYPlot, XYPlot, LineSeries, YAxis, XAxis, VerticalGridLines, HorizontalGridLines, HorizontalBarSeries} from 'react-vis';

import '../../../node_modules/react-vis/dist/style.css';

import "./Analytics.css"

import { ResponsiveCalendar } from 'nivo'

var data = require('./data')

const blueData = [{y: 'A', x: 12, color : "#85CEB9"}, {y: 'B', x: 2, color : "#85CEB9"}, {y: 'C', x: 11, color : "#85CEB9"}, {y: 'D', x: 5, color : "#85CEB9"}, {y: 'E', x: 9, color : "#85CEB9"}, {y: 'F', x: 3, color : "#85CEB9"}, {y: 'G', x: 6, color : "#85CEB9"}];

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
                <div className="analytics-content-div" style={{margin: "40px", height : "230px", minHeight : "230px"}}>
                    <div className="header-title">Contribution Activity</div>
                    <ResponsiveCalendar
                        data={data}
                        from="2016-01-02"
                        to="2016-12-31"
                        emptyColor="#eeeeee"
                        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
                        margin={{ top: 30, right: 40, bottom: 0, left: 40 }}
                        yearSpacing={40}
                        monthBorderColor="#ffffff"
                        dayBorderWidth={2}
                        dayBorderColor="#ffffff"
                       
                    />
                </div>
                <div className="analytics-content-div" style={{margin: "40px", height : "120px"}}>
                    <div className="header-title">Earnings</div>
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
                    <div className="header-title">Bounty Sector Dispersion</div>
                    <FlexibleWidthXYPlot yType="ordinal" height={280}>
                        <XAxis />
                        <YAxis />
                        <HorizontalBarSeries barWidth={0.15} data={blueData} colorType={"literal"} colorRange={["#C78BD6", "#C78BD6", "#C78BD6", "#C78BD6", "#C78BD6", "#C78BD6", "#C78BD6"]}/>
                        {/* <LabelSeries data={labelData} getLabel={d => d.x} /> */}
                    </FlexibleWidthXYPlot>
                </div>
                

            </div>
        );
    }
}
 
export default Analytics;