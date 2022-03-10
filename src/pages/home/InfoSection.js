import React from 'react';
import Info from './Info';
import * as S from './InfoSection.style';

function InfoSection() {
  return (
    <S.Section>
      <Info id="how-it-works" headline="How it works">
        • We find the 500 top posts from the past year for a subreddit.
        <br />
        • The data is visualized in a heatmap grouped by weekday and hour of the day.
        <br />
        • See immediately when to submit your reddit post.
        <br />
      </Info>

      <Info id="about" headline="About">
        This app was created during a course on
        {' '}
        <a href="https://profy.dev">profy.dev</a>
        {' '}
        with the goal to implement a pixel-perfect real-world application with professional
        workflows and tools like Kanban, ClickUp, Figma, GitHub, pull requests and code reviews.
        {' '}
        <a href="https://profy.dev/employers">Click here for more information.</a>
      </Info>
    </S.Section>
  );
}

export default InfoSection;