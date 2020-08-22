pragma solidity >=0.4.21 <0.7.0;


contract Main {
    
    address initialCreator; 
    
    constructor() payable public {
        initialCreator = msg.sender;
    }
    
    string initialDB = "QmbJWAESqCsf4RFCqEY7jecCashj8usXiyDNfKtZCwwzGb";
    
    function set(string memory x) public {
      storedData = x;
  }

  function get() public view returns (string memory) {
    return storedData;
  }
 
  function () external payable {

  }

    function sendAPayment(address payable recipient, int256 pay) public view returns (bool) {
        require (msg.sender == initialCreator);
        require (address(this).balance > pay);
        recipient.transfer(pay);
        return true;
    }