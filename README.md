# UpgradeableContract

### 运行hardhat：
```shell
npx hardhat node
```

### 安装插件
```shell
npm install --save-dev @nomicfoundation/hardhat-toolbox
npm install --save-dev @nomiclabs/hardhat-ethers ethers # peer dependencies
npm install --save-dev @openzeppelin/hardhat-upgrades
npm install --save-dev @openzeppelin/contracts-upgradeable
```

### 创建hardhat项目
```shell
npx hardhat

👷 Welcome to Hardhat v2.9.9 👷‍

? What do you want to do? …
  Create a JavaScript project
  Create a TypeScript project
❯ Create an empty hardhat.config.js
  Quit
```
选择要创建的类型：js/ts/仅配置文件

### 编译
```shell
npx hardhat compile
```

### 运行配置文件中的函数？
```shell
npx hardhat accounts --network dev
```

### 部署/运行：
需要编写部署脚本
```shell
npx hardhat run --network hardhat scripts/deploy_box.js

#控制台输出
npx hardhat run --network dev scripts/deploy_box.js       #dev是配置在hardhat.config.js中的ganache网络
Deploying Box...
Box deployed to: 0x913b8F8bEA754C74eAF22749c0fd704896E38FAF
```

### 进入控制台
```shell
npx hardhat console --network dev
> var Box = await ethers.getContractFactory("contracts/Box.sol:Box")
undefined
> var box=Box.attach("0xB7679357606EDc8A4BBCD3E4e7F0900fB494dA20")
undefined
> await box.mul(5)
BigNumber { value: "47" }
```

### 升级合约
```shell
#控制台输出
npx hardhat run --network dev ./scripts/upgrade_box.js
Compiled 1 Solidity file successfully
Deploying Box...
BoxV2 upgrade to: 0x913b8F8bEA754C74eAF22749c0fd704896E38FAF
```
从上面可以看出，升级以后代理合约地址并没有发生变化

### 验证
```shell
npx hardhat console --network dev
Welcome to Node.js v18.14.0.
Type ".help" for more information.
> var Box = await ethers.getContractFactory("Box")
undefined
> var box=Box.attach("0x913b8F8bEA754C74eAF22749c0fd704896E38FAF")
undefined
> await box.mul(5)
BigNumber { value: "210" }
```
