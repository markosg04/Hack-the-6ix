import React, { Component } from 'react';

import "./Bounty.css"

import { Button, Modal, Input } from 'antd';

import {GithubOutlined} from "@ant-design/icons"


class Bounty extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false, loading: false, contributors : [{"" : 0}] }
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
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
                }
                
            </div>
        );
    }
}
 
export default Bounty;