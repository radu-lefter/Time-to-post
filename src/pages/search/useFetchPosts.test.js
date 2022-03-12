import { renderHook } from '@testing-library/react-hooks';
import useFetchPosts from './useFetchPosts';

const getNumPosts = (nestedPostsArray) => nestedPostsArray.reduce(
  (numTotal, postsPerDay) => postsPerDay.reduce(
    (numPerDay, postsPerHour) => numPerDay + postsPerHour, numTotal,
  ),
  0,
);

test('loads 500 top posts from the Reddit API', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchPosts('500-posts'));

  expect(result.current.isLoading).toBe(true);
  expect(result.current.postsPerDay).toEqual([]);

  await waitForNextUpdate({ timeout: 10000 });

  expect(result.current.isLoading).toBe(false);
  expect(getNumPosts(result.current.postsPerDay)).toEqual(500);
  expect(result.current.postsPerDay).toMatchSnapshot();
});

test('stops loading when less than 500 posts are available', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchPosts('less-than-500-posts'));

  await waitForNextUpdate();

  expect(result.current.isLoading).toBe(false);
  expect(getNumPosts(result.current.postsPerDay)).toEqual(270);
});

test('returns error when a request fails', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchPosts('failing-request'));

  await waitForNextUpdate();

  expect(result.current.isLoading).toBe(false);
  expect(result.current.hasError).toEqual(true);
});