import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@openzeppelin/hardhat-upgrades";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ganache";
import "hardhat-abi-exporter";
import * as dotenv from "dotenv";
import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/config";
import "solidity-coverage";
import "./tasks/deploy";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      { version: "0.8.0", settings: {} },
      { version: "0.8.3", settings: {} },
      { version: "0.8.4", settings: {} },
      { version: "0.8.9", settings: {} },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.7.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  networks: {
    bsc: {
      url: "https://bsc-dataseed1.binance.org",
      accounts: [process.env.PRIVATE_KEY as string],
    },
    ftm: {
      url: "https://rpc.testnet.fantom.network",
      accounts: [process.env.PRIVATE_KEY as string],
    },
    matic: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [process.env.PRIVATE_KEY as string],
    },
    bsc97: {
      url: "https://data-seed-prebsc-2-s1.binance.org:8545",
      accounts: [process.env.PRIVATE_KEY as string],
    },
    bscLocal: {
      url: "http://127.0.0.1:7545",
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: {
      bsc: process.env.BSC_API_KEY as string,
      bsc97: process.env.BSC_API_KEY as string,
    },
    customChains: [
      {
        network: "bsc97",
        chainId: 97,
        urls: {
          apiURL: "https://api.bscscan.com/api",
          browserURL: "https://bscscan.com",
        },
      },
      {
        network: "bsc97",
        chainId: 97,
        urls: {
          apiURL: "https://api-testnet.bscscan.com/api",
          browserURL: "https://testnet.bscscan.com",
        },
      },
    ],
  },
};

export default config;
