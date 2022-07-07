// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Sample is ERC20, Ownable {
    using SafeMath for uint256;

    uint256 public initialSupply = 10**9 * 10**18;
    bool status = true;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(_msgSender(), initialSupply);
    }
}
