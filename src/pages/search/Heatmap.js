import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchPosts from './useFetchPosts';
import * as S from './Heatmap.style';

function Heatmap() {
  const { subreddit } = useParams();
  const { isLoading, hasError, posts } = useFetchPosts(subreddit);

  if (isLoading) {
    return (
      <S.LoadingContainer>
        <S.LoadingSpinner />
      </S.LoadingContainer>
    );
  }

  if (hasError) {
    return (
      <S.ErrorContainer>
        Something went wrong. Please check the subreddit you entered and try again.
      </S.ErrorContainer>
    );
  }

  return (
    <div>
      {posts.length}
    </div>
  );
}

export default Heatmap;