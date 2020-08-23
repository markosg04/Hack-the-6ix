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
    render() { 
        return (
            <div className="content-div">
                <div className="create-content-div">
                    <div className="header-title">Create a Bounty</div>
                    <div className="create-content-content-div">
                        <div>
                            <div style={{width : "400px", marginTop : "20px", display : "flex", flexDirection : "column", alignItems : "flex-start"}}>
                                <div style={{color : "white", fontSize : "12px"}}>Enter the bounty name</div>
                                <Input placeholder="Bounty Name" />
                            </div>
                            <div style={{width : "400px", marginTop : "20px", display : "flex", flexDirection : "column", alignItems : "flex-start"}}>
                                <div style={{color : "white", fontSize : "12px"}}>Add a description</div>
                                <TextArea placeholder="textarea with clear icon" allowClear />
                            </div>
                            <div style={{width : "400px", marginTop : "20px", display : "flex", flexDirection : "column", alignItems : "flex-start"}}>
                                <div style={{color : "white", fontSize : "12px"}}>Amount</div>
                                <Input prefix="⧫" suffix="ETH" />
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
                        <Button type="primary">Submit</Button>
                    </div>
                    
                </div>
            </div>
        );
    }
}
 
export default Create;