const express = require('express');
const IPFS = require('ipfs-api');
const axios = require('axios');
const ethers = require('ethers');
const { abi, address } = require('../contract');
const tools = require('./utils');

const URL = 'HTTP://127.0.0.1:7545';
const customHttpProvider = new ethers.providers.JsonRpcProvider(URL);
let Contract = new ethers.Contract(address, abi, customHttpProvider.getSigner(0));

const ipfs = new IPFS({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https'
});

const router = express.Router();

router.post('/createNewAccount', async (req, res) => {
    const ipfshash = await tools.createNewAccount(req.body.walletid, req.body.gitid);
    r = await Contract.set(ipfshash);
    res.send(ipfshash);
});

router.post('/createBounty', async (req, res) => {
    const ipfshash = await tools.createBounty(req.body.bountyname, req.body.gitid, req.body.walletid, req.body.desc, req.body.amount, req.body.repo);
    r = await Contract.set(ipfshash);
    res.send(ipfshash);
}); 

router.post('/updateUserData', async (req, res) => {
    const ipfshash = await tools.updateUserData(req.body.walletid, req.body.bountyCompleted, req.body.newMoney);
    r = await Contract.set(ipfshash);
    res.send(ipfshash);
});

router.post('/updateBountyStatus', async (req, res) => {
    const ipfshash = await tools.updateBountyStatus(req.body.bountyname, req.body.status);
    r = await Contract.set(ipfshash);
    res.send(ipfshash);
});

router.post('/donateToExistingBounty', async (req, res) => {
    const ipfshash = await tools.donateToExistingBounty(req.body.bountyname, req.body.updateValue);
    r = await Contract.set(ipfshash);
    res.send(ipfshash);
});

router.post('/retrieveUserData', async (req, res) => {
    const ipfshash = await tools.retrieveUserData(req.body.walletid);
    r = await Contract.set(ipfshash);
    res.send(ipfshash);
});

router.get('/getAllBounties', async (req, res) => { 
    const data = await tools.getAllBounties(); 
    res.send(data);
});

router.post('/retrieveBounty', async (req, res) => {
    const ipfshash = await tools.retrieveBounty(req.body.bountyname);
    r = await Contract.set(ipfshash);
    res.send(ipfshash);
});

router.get('/resetIpfsHash', async (req, res) => { // Debug Purposes
    r = await Contract.set('QmbJWAESqCsf4RFCqEY7jecCashj8usXiyDNfKtZCwwzGb');
    res.send('Success');
});

router.get('/receiveIpfsHash', async (req, res) => { // Debug Purposes
    const ipfshash = await Contract.get();
    res.send(ipfshash);
});

/* obj for report 
    name: rails,
    contributors: {
        ben: 50,
        allah: 20,
        lebron: 30
    },
    amount: 100
*/
router.post('/payment', async (req, res) => {
    const obj = req.body.report;
    const contributors = Object.keys(obj.contributors);
    for (let i = 0; i < contributors.length; i++) {
        const walletid = await tools.gitToWallet(contributors[i]);
        await Contract.sendAPayment(walletid, req.body.amount*obj.contributors[i]);
    };
})

router.post('/sendAPayment', async (req, res) => {

});

module.exports = router;