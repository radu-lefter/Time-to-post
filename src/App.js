import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Normalize />
      <GlobalStyle />
      <Routes>
        <Route path="/search">Search</Route>
        <Route path="/">Home</Route>
        <Route path="*">404 - Not Found</Route>
      </Routes>
    </Router>
  </ThemeProvider>
  );
}

export default App;
