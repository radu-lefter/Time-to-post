import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle, theme } from '../style';
import Header from '../common/header';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/search">Search</Route>
        <Route path="/">Home</Route>
        <Route path="*">404 - Not Found</Route>
      </Routes>
  </ThemeProvider>
  );
}

export default App;
