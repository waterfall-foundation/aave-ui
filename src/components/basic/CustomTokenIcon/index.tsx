import React from 'react';

import { TokenIconProps, useThemeContext } from '@aave/aave-ui-kit';
import staticStyles from './style';

type CustomTokenIconProps = TokenIconProps & { iconSvg: string };

export default function CustomTokenIcon({
  tokenSymbol,
  iconSvg,
  tokenFullName,
}: CustomTokenIconProps) {
  const { isCurrentThemeDark } = useThemeContext();
  const classes = `TokenIcon__name ${isCurrentThemeDark ? 'darkT' : 'lightT'}`;
  return (
    <>
      <style jsx={true}>{staticStyles}</style>
      <div className="TokenIcon TableItem__token TokenIconWithFullName">
        <img className="TokenIcon__image" src={iconSvg} height="26" width="26" />
        <p className={classes}>
          <b>{tokenFullName && tokenSymbol}</b>
        </p>
      </div>
    </>
  );
}
