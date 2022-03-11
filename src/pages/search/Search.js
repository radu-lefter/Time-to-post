import React from 'react';
import SearchForm from './SearchForm';
import Heatmap from './Heatmap';
import * as S from './Search.style';

function SearchPage() {
  return (
    <S.Container as="section">
      <S.Headline>
        Find the best time for a subreddit
      </S.Headline>

      <SearchForm />
      <Heatmap />
    </S.Container>
  );
}

export default SearchPage;