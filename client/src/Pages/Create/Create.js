import React, { Component } from 'react';

import "./Create.css"

import {Input, Select, Button} from 'antd';

const { TextArea } = Input;
const { Option } = Select;


class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    } 

    CONVERSION_RATE = (CAD) => { return (CAD * (1000000000000000000))}
    WEI_TO_CAD = (WEI) => { return (WEI * ((10000 / 31) / (1000000000000000000))).toFixed(2); }
    
    onSubmit(){
        const CONVERSION_RATE = (CAD) => { return (CAD * (1000000000000000000))}

        let etherCost = CONVERSION_RATE(0.0000000000001)

        let tx = this.props.signer.sendTransaction({
            to: "0xa82D86342cC1B3AC521a87BD8fDEEd8dAd7F060C", 
            value: etherCost
        }).then ( (t) => {
            console.log(t);
        })
        console.log(this.state.amount, this.state.desc, this.state.bountyname);
        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify({
        //     "bountyname": this.state.bountyname,
        //     "gitid":"vladcomsa",
        //     "walletid":"0xvlad",
        //     "desc": this.state.desc,
        //     "amount": this.state.amount,
        //     "repo":"https://github.com/toptal/gitignore"
        // });

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };

        // fetch("http://localhost:3005/ipfs/createBounty", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));

    } 

    render() { 
        return (
            <div className="content-div">
                <div className="create-content-div">
                    <div className="header-title">Create a Bounty</div>
                    <div className="create-content-content-div">
                        <div>
                            <div style={{width : "400px", marginTop : "20px", display : "flex", flexDirection : "column", alignItems : "flex-start"}}>
                                <div style={{color : "white", fontSize : "12px"}} >Enter the bounty name</div>
                                <Input onChange={(e) => this.setState({bountyname : e.target.value})} placeholder="Bounty Name" />
                            </div>
                            <div style={{width : "400px", marginTop : "20px", display : "flex", flexDirection : "column", alignItems : "flex-start"}}>
                                <div style={{color : "white", fontSize : "12px"}} onChange={(e) => this.setState({desc : e.target.value})}>Add a description</div>
                                <TextArea onChange={(e) => this.setState({desc : e.target.value})} placeholder="textarea with clear icon" allowClear />
                            </div>
                            <div style={{width : "400px", marginTop : "20px", display : "flex", flexDirection : "column", alignItems : "flex-start"}}>
                                <div style={{color : "white", fontSize : "12px"}} onChange={(e) => this.setState({amount : e.target.value})}>Amount</div>
                                <Input onChange={(e) => this.setState({amount : e.target.value})} prefix="⧫" suffix="ETH" />
                            </div>
                            <div style={{width : "400px", marginTop : "20px", display : "flex", flexDirection : "column", alignItems : "flex-start"}}>
                                <div style={{color : "white", fontSize : "12px"}}>Repository</div>
                                <Select defaultValue="Select a Repository" style={{ width: 400 }}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="dick">Dick</Option>
                                    <Option value="tard">Tard</Option>
                                    <Option value="dam">Dam</Option>
                                    <Option value="jequavis">Jequavis</Option>
                                </Select>
                            </div>
                            <div style={{width : "400px", marginTop : "20px", display : "flex", flexDirection : "column", alignItems : "flex-start"}}>
                                <div style={{color : "white", fontSize : "12px"}}>Issue/Pull Request</div>
                                <Select defaultValue="Select an Issue/PR" style={{ width: 400 }}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="dick">Dick</Option>
                                    <Option value="tard">Tard</Option>
                                    <Option value="dam">Dam</Option>
                                    <Option value="jequavis">Jequavis</Option>
                                </Select>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div className="create-content-footer">
                        <Button type="primary" onClick={() => this.onSubmit()}>Submit</Button>
                    </div>
                    
                </div>
            </div>
        );
    }
}
 
export default Create;