import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';

const setup = (initialPath = '/') =>
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>
  );

describe('Hero section', () => {
  test('navigates to search page when button is clicked', () => {
    setup();

    const ctaButton = screen.getByRole('link', {
      name: /show me the best time/i,
    });
    userEvent.click(ctaButton);

    expect(screen.getByText(/Find the best time/i)).toBeInTheDocument();
  });

  test('navigates to search page when heatmap image is clicked', () => {
    setup();

    const heatmapImage = screen.getByAltText(/screenshot of heatmap/i);
    userEvent.click(heatmapImage);

    expect(screen.getByText(/Find the best time/i)).toBeInTheDocument();
  });
});

describe('Info section', () => {
  test('contains links pointing to profy home and employers page', () => {
    setup();

    const aboutSection = screen.getAllByRole('article')[2];

    const profyLink = within(aboutSection).getByRole('link', { name: /profy\.dev/i });
    expect(profyLink.getAttribute('href')).toEqual('https://profy.dev');

    const moreInfoLink = within(aboutSection).getByRole('link', { name: /click here for more information/i });
    expect(moreInfoLink.getAttribute('href')).toEqual('https://profy.dev/employers');
  });
});