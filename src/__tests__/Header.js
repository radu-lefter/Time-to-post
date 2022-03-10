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

test('navigates to home page when logo is clicked', () => {
  setup('/search/javascript');

  const logoLink = screen.getByRole('link', { name: /logo\.svg/i });
  userEvent.click(logoLink);

  expect(screen.getByText(/social media/i)).toBeInTheDocument();
});

test('navigates to search page when search link is clicked', () => {
  setup();

  const searchLink = screen.getByRole('link', { name: /search/i });
  userEvent.click(searchLink);

  expect(screen.getByText(/search page/i)).toBeInTheDocument();
});

test.each`
 link | hash
 ${'About'} | ${'#about'}
 ${'How it works'} | ${'#how-it-works'}
`('navigates to "$link" section when "$link" link is clicked', ({ link, hash }) => {
 setup('/search/javascript');

  const hashLink = screen.getByRole('link', { name: link });
  userEvent.click(hashLink);

  expect(screen.getByText(/social media/i)).toBeInTheDocument();
});