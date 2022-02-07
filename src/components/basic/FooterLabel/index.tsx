import React from 'react';

import staticStyles from './style';
import { useThemeContext } from '@aave/aave-ui-kit';

export const FooterLabel = () => {
  const { isCurrentThemeDark } = useThemeContext();
  const classes = `footer-hint__text ${isCurrentThemeDark ? 'dark' : 'light'}`;

  return (
    <>
      <style jsx={true}>{staticStyles}</style>
      <div className="footer-hint__container">
        <div className={classes}>
          This site is for demo and testing purposes only and this technology is still in a test
          mode and needs more profound elaboration to be released as a ready-made product.
        </div>
      </div>
    </>
  );
};
