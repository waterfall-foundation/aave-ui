import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  .footer-hint__container {
    margin: auto;
    max-width: 1024px;
    padding: 20px 15px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    margin-top: 10px;
  }

  .footer-hint__text.dark {
    color: #c3c5cb;
  }

  .footer-hint__text.light {
    color: #25262a;
  }
`;

export default staticStyles;
