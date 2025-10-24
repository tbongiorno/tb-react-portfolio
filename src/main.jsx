import React, { StrictMode } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProviderWrapper } from './ThemeProviderWrapper.jsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProviderWrapper>
    <App />
  </ThemeProviderWrapper>,
)
