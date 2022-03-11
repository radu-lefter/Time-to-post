import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';
import { defaultSubreddit } from '../config';

const setup = (initialPath = '/') => {

  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>,
  );

};

test('submitting the form updates the URL', () => {
  setup('/search/reactjs');

  const searchInput = screen.getByLabelText('r /');
  expect(searchInput.value).toBe('reactjs');

  userEvent.clear(searchInput);
  userEvent.type(searchInput, 'vuejs');
  expect(searchInput.value).toBe('vuejs');


});

test('input value changes to default subreddit when search link in header is clicked', () => {
  setup('/search/reactjs');
  const searchInput = screen.getByRole('textbox');
  const header = screen.getByRole('banner');
  const searchLink = within(header).getByRole('link', { name: /Search/ });

  userEvent.click(searchLink);

  expect(searchInput.value).toBe(defaultSubreddit);
});