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
            <div className="bounty2-card-div">
                <div className="bounty2-left-div">
                    <div className="bounty-title-div">Google Chrome eat too much RAM</div>
                    <div className="bounty2-desc-div">This is the description of this google chrome issue. This is supposed to a description and I am using this to fill up the empty space. Fill some more space here. This is supposed to a description and I am using this to fill up the empty space.</div>
                </div>
                <div className="bounty-right-div">
                    <div style={{display : "flex", color : "white", marginTop : "5px", flexDirection : "column", alignItems : "flex-end", height : "100%"}}>
                        <div style={{marginRight : "8px", fontWeight : 600}}>45 ETH</div>
                        <div style={{flex : 1, display : "flex", flexDirection : "column", justifyContent : "flex-end", alignItems : "flex-end"}}>
                            <Button type="primary" icon={<GithubOutlined></GithubOutlined>} style={{marginRight : "8px"}}></Button>
                            <div style={{height : "4px"}}></div>
                            {
                                this.props.review
                                ?
                                <Button type="secondary" style={{marginRight : "8px", marginBottom : "8px"}}>Report</Button>
                                :
                                <Button type="secondary" style={{marginRight : "8px", marginBottom : "8px"}}>Contribute</Button>
                            }
                        </div>
                    </div>
                    {/* <div style={{flex : 1, display: "flex", justifyContent : "flex-end", alignItems : "flex-end", marginBottom : "10px", marginRight : "10px"}}>
                        <Button type="secondary">Contribute</Button>
                        <div style={{width : "10px"}}></div>
                        <Button type="primary" icon={<GithubOutlined></GithubOutlined>}></Button>
                    </div> */}
                </div>
                
            </div>
        );
    }
}
 
export default Bounty;