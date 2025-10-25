import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    cardColor: %{({ theme }) => theme.cardColor};
    cardBackground: %{({ theme }) => theme.cardBackground};
    margin: 0;
  }
`;