// SPDX-License-Identifier: MIT
//Indicar la version
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

contract hello {
    string public message = "Hello Pablo Acebedo";

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory _message) public {
        message = _message;
    }
}
