import React, { Component } from "react";
import { ethers } from 'ethers';
import getWeb3 from "./getWeb3";

import "./App.less";

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Search from "./Pages/Search/Search"
import Create from "./Pages/Create/Create"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Analytics from "./Pages/Analytics/Analytics"
import Navbar from "./Components/Navbarr/Navbarr"


class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null, githubSignedIn : false };

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
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route path="/browse">
              <Search signer={(new ethers.providers.Web3Provider(window.ethereum)).getSigner()}></Search>
            </Route>
            <Route path="/create">
              <Create signer={(new ethers.providers.Web3Provider(window.ethereum)).getSigner()}></Create>
            </Route>
            <Route path="/analytics">
              <Analytics signer={(new ethers.providers.Web3Provider(window.ethereum)).getSigner()}></Analytics>
            </Route>
            <Route path="/">
              <Dashboard signer={(new ethers.providers.Web3Provider(window.ethereum)).getSigner()} account={this.state.account}></Dashboard>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
