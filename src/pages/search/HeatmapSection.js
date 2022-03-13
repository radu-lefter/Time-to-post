import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchPosts from './useFetchPosts';
import Heatmap from './Heatmap';
import PostsTable from './PostsTable';
import * as S from './HeatmapSection.style';

function HeatmapSection() {
  const { subreddit } = useParams();
  const { isLoading, hasError, postsPerDay } = useFetchPosts(subreddit);
  const [selectedDayAndHour, setSelectedDayAndHour] = useState({ day: null, hour: null });

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

  const { day, hour } = selectedDayAndHour;
  const selectedPosts = postsPerDay[day] && postsPerDay[day][hour];
  const showPostsTable = selectedPosts && selectedPosts.length > 0;

  return (
    <S.Container as="section">
      <Heatmap
        postsPerDay={postsPerDay}
        selectedDayAndHour={selectedDayAndHour}
        onClickHour={setSelectedDayAndHour}
      />

      {
        showPostsTable && (
          <PostsTable
            posts={selectedPosts}
          />
        )
      }
    </S.Container>
  );
}

export default HeatmapSection;