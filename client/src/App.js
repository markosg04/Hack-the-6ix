import React, { Component } from "react";
import { ethers } from 'ethers';
import getWeb3 from "./getWeb3";

import "./App.css";

import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const account = accounts[0]; 
      const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner(); 

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, account, signer });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  render() {
    if (!this.state.account) {
      return <div> Loading Web3, accounts, and contract... </div>;
    }
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
