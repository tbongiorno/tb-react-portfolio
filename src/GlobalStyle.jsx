import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    cardColor: %{({ theme }) => theme.cardColor};
    cardBackground: %{({ theme }) => theme.cardBackground};
  }

   html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }
`;