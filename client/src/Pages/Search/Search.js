import React, { Component } from 'react';

import BountyCard from "../../Components/Bounty/Bounty.js"

import {Input, Select, Button} from 'antd';

import "./Search.css"


const { TextArea } = Input;
const { Option } = Select;



class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { data : [], keys : [] }
    }

    componentDidMount(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://localhost:3005/ipfs/getAllBounties", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(JSON.parse(result))
            this.setState({data : JSON.parse(result), keys : Object.keys(JSON.parse(result))})
        })
        .catch(error => console.log('error', error));
    }

    render() { 
        return (
            <div className="content-div">
                <div className="create-content-div">
                    <div className="header-title">Browse Bounties</div>
                    <div className="search-content-content-div">
                        {
                            this.state.keys.map((val, key) => {
                                var data = this.state.data[val]
                                console.log(this.state.data)
                                if (this.state.data !== [""]){
                                    return (
                                        <BountyCard signer={this.props.signer} amount={data.amount} title={val} desc={data.desc} gitId={data.gitid} repo={data.repo}></BountyCard>
                                    )
                                }
                                return
                                
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Search;