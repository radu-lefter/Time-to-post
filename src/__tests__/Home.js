import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';

const setup = (initialPath = '/') => render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>,
  );

test('navigates to search page when button is clicked', () => {
  setup();

  const ctaButton = screen.getByRole('link', { name: /show me the best time/i });
  userEvent.click(ctaButton);

  expect(screen.getByText(/search page/i)).toBeInTheDocument();
});

test('navigates to search page when heatmap image is clicked', () => {
  setup();

  const heatmapImage = screen.getByAltText(/screenshot of heatmap/i);
  userEvent.click(heatmapImage);

  expect(screen.getByText(/search page/i)).toBeInTheDocument();
});