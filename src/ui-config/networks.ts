import { BaseNetworkConfig } from '../helpers/config/types';

export const waterfallId = 333777333;
export const goerliId = 5;
export const waterfallGasPrice = 20000000000;
export const baseAsset = 'WAT';

export const networkConfigs: Record<string, BaseNetworkConfig> = {
  [waterfallId]: {
    name: 'Waterfall',
    publicJsonRPCUrl: ['https://rpc.waterfall.network/rpc'],
    addresses: {
      walletBalanceProvider: '0x81428F763e3409a05525307332Cd875B014F73A0',
      uiPoolDataProvider: '0xE59b9A3369dD671C623554Acc656c760c50ABeE4',
      uiIncentiveDataProvider: '0xAeB7991Fbc44F563C82F501E116CAE6fbAf68dF2',
    },
    protocolDataUrl: '',
    baseAsset: 'ETH',
    baseAssetWrappedAddress: '0x219ed1326b82c468f825cbD727dbaf66810a619C',
    // incentives hardcoded information
    rewardTokenSymbol: 'WWAT',
    rewardTokenAddress: '0x219ed1326b82c468f825cbD727dbaf66810a619C',
    rewardTokenDecimals: 18,
    incentivePrecision: 18,
    explorerLink: 'https://explorer.waterfall.network',
    rpcOnly: true,
    isTestnet: true,
  },
  // [ChainId.kovan]: {
  //   name: 'Kovan',
  //   publicJsonRPCUrl: ['https://eth-kovan.alchemyapi.io/v2/demo', 'https://kovan.poa.network'],
  //   addresses: {
  //     walletBalanceProvider: '0x07DC923859b68e9399d787bf52c4Aa9eBe3490aF',
  //     uiPoolDataProvider: '0x6062ad399E47BF75AEa0b3c5BE7077c1E8664Dcb',
  //     // uiIncentiveDataProvider: '0x9842E5B7b7C6cEDfB1952a388e050582Ff95645b',
  //     // chainlinkFeedRegistry: '0xAa7F6f7f507457a1EE157fE97F6c7DB2BEec5cD0',
  //   },
  //   protocolDataUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2-kovan',
  //   // baseUniswapAdapter: '0xf86Be05f535EC2d217E4c6116B3fa147ee5C05A1',
  //   baseAsset: 'ETH',
  //   baseAssetWrappedAddress: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
  //   // incentives hardcoded information
  //   rewardTokenSymbol: 'stkAAVE',
  //   rewardTokenAddress: '0xb597cd8d3217ea6477232f9217fa70837ff667af',
  //   rewardTokenDecimals: 18,
  //   incentivePrecision: 18,
  //   explorerLink: 'https://kovan.etherscan.io',
  //   rpcOnly: true,
  //   isTestnet: true,
  // },
  // [goerliId]: {
  //   name: 'Goerli',
  //   publicJsonRPCUrl: ['https://goerli.infura.io/v3/35bd3a0275804f1bb6ba57ebcd3dfaa4'],
  //   addresses: {
  //     walletBalanceProvider: '0x31E9bAB87bf2F4d93E19D0C68B1130Ad5B249669',
  //     uiPoolDataProvider: '0xa0Fa846a5c51026B5A31CF554543F07eB0b8e433',
  //     uiIncentiveDataProvider: '0x79ca57C121442efd594Ff61DB5444aD96c8b2105',
  //   },
  //   protocolDataUrl: '',
  //   baseAsset: 'ETH',
  //   baseAssetWrappedAddress: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
  //   baseUniswapAdapter: '0x3A8787AaF5f88ca8d2b5D9a08457754156A3f97f',
  //   // incentives hardcoded information
  //   rewardTokenSymbol: 'stkAAVE',
  //   rewardTokenAddress: '0xb6062c830e14eb130f079d2b9f9dbe8c15414f6a',
  //   rewardTokenDecimals: 18,
  //   incentivePrecision: 18,
  //   explorerLink: '',
  //   rpcOnly: true,
  //   isTestnet: true,
  // },
  // [ChainId.mainnet]: {
  //   name: 'Ethereum mainnet',
  //   publicJsonRPCUrl: ['https://cloudflare-eth.com', 'https://eth-mainnet.alchemyapi.io/v2/demo'],
  //   publicJsonRPCWSUrl: 'wss://eth-mainnet.alchemyapi.io/v2/demo',
  //   addresses: {
  //     walletBalanceProvider: '0x8E8dAd5409E0263a51C0aB5055dA66Be28cFF922',
  //     uiPoolDataProvider: '0x47e300dDd1d25447482E2F7e5a5a967EA2DA8634',
  //     uiIncentiveDataProvider: '0xd9F1e5F70B14b8Fd577Df84be7D75afB8a3A0186',
  //     chainlinkFeedRegistry: '0x47Fb2585D2C56Fe188D0E6ec628a38b74fCeeeDf',
  //   },
  //   cachingServerUrl: 'https://cache-api-mainnet.aave.com/graphql',
  //   cachingWSServerUrl: 'wss://cache-api-mainnet.aave.com/graphql',
  //   protocolDataUrl: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2',
  //   baseUniswapAdapter: '0xc3efa200a60883a96ffe3d5b492b121d6e9a1f3f',
  //   baseAsset: 'ETH',
  //   baseAssetWrappedAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  //   // incentives hardcoded information
  //   rewardTokenSymbol: 'stkAAVE',
  //   rewardTokenAddress: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
  //   rewardTokenDecimals: 18,
  //   incentivePrecision: 18,
  //   explorerLink: 'https://etherscan.io',
  //   rpcOnly: false,
  // },
} as const;
