// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin\contracts-upgradeable\proxy\utils\Initializable.sol"; 

contract Box is Initializable {
    uint256 private value;
 
    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);
 
    // Stores a new value in the contract
    function store(uint256 newValue) public initializer {
        value = newValue;
        emit ValueChanged(newValue);
    }
 
    // Reads the last stored value
    function mul(uint256 num) public view returns (uint256) {
        return value + num; // bad version
    }
}