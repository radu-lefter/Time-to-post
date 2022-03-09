import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './HeroSection.style';
import { defaultSubreddit } from '../../config';

function HeroSection() {
  return (
    <S.Article>
      <S.Headline>
        No reactions to your reddit posts?
      </S.Headline>

      <S.Subline>
        Great timing, great results! Find the best time to post on your subreddit.
      </S.Subline>

      <S.Button to={`/search/${defaultSubreddit}`}>
        Show me the best time
      </S.Button>

      <S.DefaultSubreddit>
        r/
        {defaultSubreddit}
      </S.DefaultSubreddit>

      <Link to={`/search/${defaultSubreddit}`}>
        <S.Image
          src="images/heatmap.png"
          // srcSet="/images/heatmap.png, /images/heatmap@2x.png 2x, /images/heatmap@3x.png 3x"
          alt="Screenshot of heatmap"
        />
      </Link>
    </S.Article>
  );
}

export default HeroSection;