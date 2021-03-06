import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { ContextProvider } from './hooks/useStateContext';

const darkTheme = createTheme({
  palette:{
    mode:'dark',
  },
})
ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
    <ThemeProvider theme={darkTheme}>
    <App />
    <CssBaseline />
    </ThemeProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
