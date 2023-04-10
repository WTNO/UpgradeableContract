require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require("ethers")

task("accounts", "Print the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

const data = require("./secret.json")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    dev: {
      url : "http://127.0.0.1:8545",
      accounts: {
        mnemonic: data.mnemonic,
        path: "m/44'/60'/0'/0/"
      }
    }
  }
};
