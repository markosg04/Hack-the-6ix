import React, { Component } from 'react';

import "./Bounty.css"

import { Button } from 'antd';

import {GithubOutlined} from "@ant-design/icons"


class Bounty extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="bounty-card-div">
                <div className="bounty-left-div">
                    <div className="bounty-title-div">Google Chrome eat too much RAM</div>
                    <div className="bounty-desc-div">This is the description of this google chrome issue. This is supposed to a description and I am using this to fill up the empty space. Fill some more space here. This is supposed to a description and I am using this to fill up the empty space.</div>
                </div>
                <div className="bounty-right-div">
                    <div style={{display : "flex", color : "white", justifyContent : "flex-end", marginTop : "5px"}}>
                        <div>Jason Smith</div>
                        <div style={{marginLeft : "6px", marginRight : "8px", fontWeight : 600}}>45 ETH</div>
                    </div>
                    <div style={{flex : 1, display: "flex", justifyContent : "flex-end", alignItems : "flex-end", marginBottom : "10px", marginRight : "10px"}}>
                        <Button type="secondary">Contribute</Button>
                        <div style={{width : "10px"}}></div>
                        <Button type="primary" icon={<GithubOutlined></GithubOutlined>}></Button>
                    </div>
                </div>
                
            </div>
        );
    }
}
 
export default Bounty;