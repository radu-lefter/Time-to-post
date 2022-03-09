import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle, theme } from '../style';
import * as S from './App.style';
import Header from '../common/header';
import Footer from '../common/footer';
import Home from './Home';
import Search from './Search';
import Terms from './Terms';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />
      <S.ContentContainer>
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/search/javascript" element={<Search />}>
            Search
          </Route>
          <Route path="/terms" element={<Terms />}>
            Home
          </Route>
          <Route path="*">404 - Not Found</Route>
        </Routes>
      </S.ContentContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
