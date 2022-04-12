import React from 'react';
import { useIntl } from 'react-intl';

import { useProtocolDataContext } from '../../../libs/protocol-data-provider';
import Link from '../../../components/basic/Link';

import messages from './messages';
import staticStyles from './style';
import { baseAsset } from '../../networks';

export default function FormattedTxErrorText() {
  const intl = useIntl();
  const { networkConfig } = useProtocolDataContext();

  return (
    <div className="FormattedTxErrorText">
      <span>
        {intl.formatMessage(messages.errorDescriptionFirst, {
          asset: baseAsset || networkConfig.baseAsset,
        })}
      </span>
      <span>
        {intl.formatMessage(messages.errorDescriptionSecond, {
          email: (
            <Link
              to="https://t.me/joinchat/QFPa-8dCJ3ZiMjAy"
              title="Telegram"
              absolute={true}
              inNewWindow={true}
              color="secondary"
            />
          ),
          // TELEGRAM LINK
          discord: (
            <Link
              to="https://t.me/joinchat/QFPa-8dCJ3ZiMjAy"
              title="Telegram"
              absolute={true}
              inNewWindow={true}
              color="secondary"
            />
          ),
        })}
      </span>

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
    </div>
  );
}
