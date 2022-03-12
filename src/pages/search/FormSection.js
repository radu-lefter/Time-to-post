import React from 'react';
import { Container, Headline } from './FormSection.style';
import SearchForm from './SearchForm';

function FormSection() {
  return (
    <Container as="section">
      <Headline>
        Find the best time for a subreddit
      </Headline>

      <SearchForm />
    </Container>
  );
}

export default FormSection;