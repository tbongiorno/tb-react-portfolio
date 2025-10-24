import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    text: ${({ theme }) => theme.text};
    margin: 0;
  }
`;

// const GlobalStyle = createGlobalStyle`
//   body {
//     background-color: ${({ theme }) => theme.background};
//     text: ${({ theme }) => theme.text};
//     margin: 0;
//   }
// `

