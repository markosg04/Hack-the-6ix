import React, { Component } from 'react';

import "./Bounty.css"

import { Button, Modal, Input } from 'antd';

import {GithubOutlined} from "@ant-design/icons"

import bigInt from 'big-integer';

import { ethers, utils } from 'ethers';

class Bounty extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false, loading: false, contributors : [{"" : 0}] }
    }

    ETH_TO_WEI = (ETH) => { return (ETH * (1000000000000000000))}
    WEI_TO_CAD = (WEI) => { return (WEI * ((10000 / 31) / (1000000000000000000))).toFixed(2); }
    CAD_TO_WEI = (CAD) => { return (CAD * (31/10000) * (1000000000000000000))}

    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {        this.setState({ loading: true });
        // setTimeout(() => {
        //   this.setState({ loading: false, visible: false });
        // }, 3000);

        if (this.props.review){
            // HANDLE SENDING REPORT
        } else{
            let adityaCost = bigInt(parseInt(this.CAD_TO_WEI(this.state.amount)));
            let weiCost = this.ETH_TO_WEI(this.state.amount)
            weiCost = bigInt(parseInt(weiCost, 16));
            // weiCost = this.WEI_TO_CAD(weiCost);
            console.log(weiCost)
            console.log(adityaCost);
            let hex = parseInt(weiCost, 16);
            console.log(hex);
            let cost1 = this.ETH_TO_WEI(this.state.amount);
            let weicost = cost1.toString() + '.0'
            let cost = utils.parseEther(this.state.amount);
            let wei = parseInt(bigInt(cost));
            console.log(wei);
            console.log(weicost);
            console.log(cost.toString());
            cost = "1000000000000000000"
            // let tx = this.props.signer.sendTransaction({
            //     to: "0xa82D86342cC1B3AC521a87BD8fDEEd8dAd7F060C", 
            //     value: weicost
            // }).then ( (t) => {
            //     console.log(t);
            //     var myHeaders = new Headers();
            //     myHeaders.append("Content-Type", "application/json");

            //     var raw = JSON.stringify({"bountyname": this.props.title, "updateValue": weicost});

            //     var requestOptions = {
            //         method: 'POST',
            //         headers: myHeaders,
            //         body: raw,
            //         redirect: 'follow'
            //     };

            //     fetch("http://localhost:3005/ipfs/donateToExistingBounty", requestOptions)
            //     .then(response => response.text())
            //     .then(result => {
            //         console.log(result)
            //         console.log(bigInt(parseInt(result, 16)));
            //         this.setState({ loading: false, visible: false });
            //     })
            //     .catch(error => console.log('error', error));

            // })
              
            
        }
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };

    addContributor(){
        var contributors = this.state.contributors
        contributors.push({"" : 0})
        this.setState({contributors})
    }

    render() { 
        return (
            <div className="bounty2-card-div">
                <div className="bounty2-left-div">
                    <div className="bounty-title-div">Hacker Demo</div>
                    <div className="bounty2-desc-div">Hacker Description</div>
                </div>
                <div className="bounty-right-div">
                    <div style={{display : "flex", color : "white", marginTop : "5px", flexDirection : "column", alignItems : "flex-end", height : "100%"}}>
                        <div style={{marginRight : "8px", fontWeight : 600}}>1 ETH</div>
                        <div style={{flex : 1, display : "flex", flexDirection : "column", justifyContent : "flex-end", alignItems : "flex-end"}}>
                            <a href="https://google.com" target="_blank"><Button type="primary" icon={<GithubOutlined></GithubOutlined>} style={{marginRight : "8px"}}></Button></a>
                            <div style={{height : "4px"}}></div>
                            {
                                this.props.review
                                ?
                                <Button type="secondary" style={{marginRight : "8px", marginBottom : "8px"}} onClick={this.showModal}>Report</Button>
                                :
                                <Button type="secondary" style={{marginRight : "8px", marginBottom : "8px"}} onClick={this.showModal}>Contribute</Button>
                            }
                        </div>
                    </div>
                    {/* <div style={{flex : 1, display: "flex", justifyContent : "flex-end", alignItems : "flex-end", marginBottom : "10px", marginRight : "10px"}}>
                        <Button type="secondary">Contribute</Button>
                        <div style={{width : "10px"}}></div>
                        <Button type="primary" icon={<GithubOutlined></GithubOutlined>}></Button>
                    </div> */}
                </div>
                {
                    this.props.review
                    ?
                    <Modal
                    title="Submit a Report"
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
                        {
                            this.state.contributors.map((val, key) => {
                                return(
                                    <div style={{width : "100%", display : "flex", marginTop : "10px"}}> 
                                        <Input placeholder="Bounty Name"/> 
                                        <div style={{width : "100px"}}>
                                            <Input prefix="%"/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                        <div style={{width : "100%", textAlign : "right"}} className="hover" onClick={() => this.addContributor()}>Add Contributor</div>
                    </Modal>
                    :
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
                }
                
            </div>
        );
    }
}
 
export default Bounty;