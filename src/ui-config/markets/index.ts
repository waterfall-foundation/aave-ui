import { MarketDataType } from '../../helpers/config/types';

import * as logos from './images';
import { waterfallId } from '../networks';

export enum CustomMarket {
  // proto_kovan = 'proto_kovan',
  proto_waterfall = 'proto_waterfall',
  // proto_goerli = 'proto_goerli',
  // proto_mainnet = 'proto_mainnet',
}

export const marketsData: { [key in keyof typeof CustomMarket]: MarketDataType } = {
  [CustomMarket.proto_waterfall]: {
    chainId: waterfallId,
    logo: logos.aavev2Logo,
    activeLogo: logos.aavev2ActiveLogo,
    aTokenPrefix: 'W',
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: '0x3EaF068ca0c555616Ecd3010B3Dc428C1332C1cC'.toLowerCase(),
      LENDING_POOL: '0x424B86672460Dc8e7D9BBbf50B073A74D4fe7AC8',
      WETH_GATEWAY: '0xc189e07B926Ead679Fd2B38117c2f00f9CE3DED8',
    },
  },
  // [CustomMarket.proto_kovan]: {
  //   chainId: ChainId.kovan,
  //   logo: logos.aavev2Logo,
  //   activeLogo: logos.aavev2ActiveLogo,
  //   aTokenPrefix: 'A',
  //   enabledFeatures: {
  //     faucet: true,
  //     governance: true,
  //     staking: true,
  //     incentives: true,
  //   },
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: '0x88757f2f99175387ab4c6a4b3067c77a695b0349'.toLowerCase(),
  //     LENDING_POOL: '0xE0fBa4Fc209b4948668006B2bE61711b7f465bAe',
  //     WETH_GATEWAY: '0xA61ca04DF33B72b235a8A28CfB535bb7A5271B70',
  //     FAUCET: '0x600103d518cC5E8f3319D532eB4e5C268D32e604',
  //   },
  // },
  // [CustomMarket.proto_goerli]: {
  //   chainId: 5,
  //   logo: logos.aavev2Logo,
  //   activeLogo: logos.aavev2ActiveLogo,
  //   aTokenPrefix: 'A',
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: '0xC1A54cb0AC7453d1b3a2f8D75E08ed47b402AE89'.toLowerCase(),
  //     LENDING_POOL: '0x32FF58e1717a580C1068f7f2C8B96957981C7f4B',
  //     WETH_GATEWAY: '0x156De7c86E5934ca1F970Fcb411Ac2CCc00a4bB1',
  //     REPAY_WITH_COLLATERAL_ADAPTER: '0x8af59bbeB3cE102Ba40e76898Fb0E5F0270cc03f',
  //   },
  // },
  // [CustomMarket.proto_mainnet]: {
  //   chainId: ChainId.mainnet,
  //   logo: logos.aavev2Logo,
  //   activeLogo: logos.aavev2ActiveLogo,
  //   aTokenPrefix: 'A',
  //   enabledFeatures: {
  //     governance: true,
  //     staking: true,
  //     liquiditySwap: true,
  //     collateralRepay: true,
  //     incentives: true,
  //   },
  //   addresses: {
  //     LENDING_POOL_ADDRESS_PROVIDER: '0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5'.toLowerCase(),
  //     LENDING_POOL: '0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9',
  //     WETH_GATEWAY: '0xcc9a0B7c43DC2a5F023Bb9b738E45B0Ef6B06E04',
  //     REPAY_WITH_COLLATERAL_ADAPTER: '0x498c5431eb517101582988fbb36431ddaac8f4b1',
  //     SWAP_COLLATERAL_ADAPTER: '0x135896DE8421be2ec868E0b811006171D9df802A',
  //   },
  // },
} as const;
