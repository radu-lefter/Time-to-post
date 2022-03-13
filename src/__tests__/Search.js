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

// test('loads top posts for subreddit in URL', async () => {
//   setup('/search/javascript');

//   screen.getByText('loading-spinner.svg');

//   // this is just a placeholder assertion that tests if the result
//   // was rendered correctly
//   expect(await screen.findByText('500')).toBeInTheDocument();
//   expect(screen.queryByText('loading-spinner.svg')).not.toBeInTheDocument();
// });

test('renders error message', async () => {
  setup('/search/failing-request');
  expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
});


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

async function clickFirstCellWithValue(value) {
  const heatmap = await screen.findByTestId('heatmap');
  const cell = within(heatmap).getAllByText(value)[0];
  userEvent.click(cell);
}

describe('posts table', () => {
  

  test('is not visible when cell with no posts is clicked', async () => {
    setup('/search/reactjs');
    await clickFirstCellWithValue('0');

    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  test('shows posts ordered by time according to cell that is clicked', async () => {
    setup('/search/reactjs');
    await clickFirstCellWithValue('4');

    const table = screen.getByRole('table');
    const tableRows = within(table)
      .getAllByRole('row')
      .slice(1);

    const tableContent = tableRows.map((row) => {
      const cells = within(row).getAllByRole('cell');
      const titleLink = within(cells[0]).getByRole('link');
      const authorLink = within(cells[4]).getByRole('link');
      return {
        title: titleLink.innerHTML,
        href: titleLink.href,
        time: cells[1].innerHTML,
        score: cells[2].innerHTML,
        numComments: cells[3].innerHTML,
        author: authorLink.innerHTML,
        authorHref: authorLink.href,
      };
    });

    expect(tableContent).toMatchSnapshot();
  });

  
});