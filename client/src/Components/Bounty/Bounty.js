import React, { Component } from 'react';

import "./Bounty.css"

import { Button, Modal, Input } from 'antd';

import {GithubOutlined} from "@ant-design/icons"

import { ethers } from 'ethers';

var bigInt = require("big-integer");


class Bounty extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
    handleOk = () => {
        this.setState({ loading: true });
        // setTimeout(() => {
        //     this.setState({ loading: false, visible: false });
        // }, 3000);

        const CONVERSION_RATE = (CAD) => { return (CAD * (1000000000000000000))}

        let etherCost = CONVERSION_RATE(this.state.amount)

        let tx = this.props.signer.sendTransaction({
            to: "0xa82D86342cC1B3AC521a87BD8fDEEd8dAd7F060C", 
            value: etherCost
        }).then ( (t) => {
            console.log(t);



            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({"bountyname": this.props.title, "updateValue": etherCost});

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("http://localhost:3005/ipfs/donateToExistingBounty", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                this.setState({ loading: false, visible: false });
            })
            .catch(error => console.log('error', error));

        })
          
        
        // let tx = this.props.signer.sendTransaction({
        //     to: "0xDBa0ebAa4BA4FEE31778526f47A3Aee3c028060B", 
        //     value: etherCost
        // }).then ( (t) => {
        //     console.log(t);
        //     this.setState({ loading: false, visible: false });
        // })
    };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };

    contribute(){

    }

    render() { 
        return (
            <div className="bounty-card-div">
                <div className="bounty-left-div">
                    <div className="bounty-title-div">{this.props.title}</div>
                    <div className="bounty-desc-div">{this.props.desc}</div>
                </div>
                <div className="bounty-right-div">
                    <div style={{display : "flex", color : "white", justifyContent : "flex-end", marginTop : "5px"}}>
                        <div>{this.props.gitId}</div>
                        <div style={{marginLeft : "6px", marginRight : "8px", fontWeight : 600}}>{this.props.amount} ETH</div>
                    </div>
                    <div style={{flex : 1, display: "flex", justifyContent : "flex-end", alignItems : "flex-end", marginBottom : "10px", marginRight : "10px"}}>
                        <Button type="secondary" onClick={() => this.showModal()}>Contribute</Button>
                        <div style={{width : "10px"}}></div>
                        <a href={this.props.repo} target="_blank"><Button type="primary" icon={<GithubOutlined></GithubOutlined>}></Button></a>
                    </div>
                </div>
                <Modal
                title="Contribute to Bounty"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="back" onClick={this.handleCancel}>
                      Cancel
                    </Button>,
                    <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                      Submit
                    </Button>,
                ]}
                >
                    <div style={{fontSize : "12px"}}>Amount</div>
                    <Input prefix="⧫" suffix="ETH" onChange={(e) => this.setState({amount : e.target.value})}/>
                    
                </Modal>
            </div>
        );
    }
}
 
export default Bounty;