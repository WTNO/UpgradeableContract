const { ethers, upgrades } = require("hardhat");
 
async function main() {
  const boxV1 = "0x913b8F8bEA754C74eAF22749c0fd704896E38FAF"; // 上一个版本逻辑合约的地址
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const boxV2 = await upgrades.upgradeProxy(boxV1, BoxV2);

  console.log("Deploying Box...");
  await boxV2.deployed();
  console.log("BoxV2 upgrade to:", boxV2.address);
}
 
main();