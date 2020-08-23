import React, { Component } from 'react';

import BountyCard from "../../Components/Bounty/Bounty.js"

import {Input, Select, Button} from 'antd';

import "./Search.css"


const { TextArea } = Input;
const { Option } = Select;



class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="content-div">
                <div className="create-content-div">
                    <div className="header-title">Browse Bounties</div>
                    <div className="search-content-content-div">
                        <BountyCard></BountyCard>
                        <BountyCard></BountyCard>
                        <BountyCard></BountyCard>
                        <BountyCard></BountyCard>
                        <BountyCard></BountyCard>
                        <BountyCard></BountyCard>
                        <BountyCard></BountyCard>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Search;