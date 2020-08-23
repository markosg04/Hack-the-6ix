import React, { Component } from 'react';

import "./Navbarr.css"

import {Link} from 'react-router-dom'


import { Button } from 'antd';

import {GithubOutlined, SearchOutlined, AppstoreOutlined, BankOutlined, BarChartOutlined} from "@ant-design/icons"

class Navbarr extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="navbar-div">
                {/* <image src="https://rudejuveniledriverwrapper.adityakeerthi.repl.co/GitBounty.png" /> */}
                <div className="navbar-title">GitBounty</div>
                <div className="navbar-links-div">
                    <Link className="navbar-link-item" to="/dashboard"><AppstoreOutlined /><div style={{width: "10px"}}></div>Dashboard</Link>
                    <Link className="navbar-link-item" to="/browse"><SearchOutlined /><div style={{width: "10px"}}></div>Browse</Link>
                    <Link className="navbar-link-item" to="/create"><BankOutlined /><div style={{width: "10px"}}></div>Create</Link>
                    <Link className="navbar-link-item" to="/analytics"><BarChartOutlined /><div style={{width: "10px"}}></div>Analytics</Link>
                </div>
                <div className="navbar-footer">
                    <a href="https://github.com/login/oauth/authorize?client_id=dcf9c523dbd3438422b7"><Button type="primary" icon={<GithubOutlined />}>Link to GitHub Account</Button></a>
                </div>
            </div>
        );
    }
}
 
export default Navbarr;