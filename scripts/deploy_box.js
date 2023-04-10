const { ethers, upgrades } = require("hardhat");
 
async function main() {
  const Box = await ethers.getContractFactory("Box");

  // const box = await Box.deploy();
  const box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });

  console.log("Deploying Box...");
  await box.deployed();
  console.log("Box deployed to:", box.address);
}
 
main();