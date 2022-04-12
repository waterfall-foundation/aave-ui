import { MessageDescriptor } from 'react-intl';
import { MarketDataType } from '../../../helpers/config/types';
import { isFeatureEnabled } from '../../../helpers/config/markets-and-network-config';

import messages from './messages';

export interface Navigation {
  link: string;
  title: MessageDescriptor;
  hiddenWithoutWallet?: boolean;
  absolute?: boolean;
  onClick?: () => void;
  isVisible?: (data: MarketDataType) => boolean | undefined;
}

const navigation: Navigation[] = [
  {
    link: '/markets',
    title: messages.markets,
  },
  {
    link: '/dashboard',
    title: messages.dashboard,
  },
  {
    link: '/deposit',
    title: messages.deposit,
  },
  {
    link: '/borrow',
    title: messages.borrow,
  },
  {
    link: '/asset-swap',
    title: messages.swap,
    isVisible: isFeatureEnabled.liquiditySwap,
  },
  {
    link: 'https://waterfall.foundation/',
    title: messages.about,
  },
  {
    link: 'https://waterfall.foundation/aave',
    title: messages.manual,
  },
];

export const moreNavigation: Navigation[] = [];

export const mobileNavigation: Navigation[] = [
  ...navigation,
  // ...moreMenuItems,
  // ...moreMenuMobileOnlyItems,
];

export default navigation;
