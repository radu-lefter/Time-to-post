import React from 'react';
import { arrayOf } from 'prop-types';
import propTypes from './propTypes';
import PostAuthor from './PostAuthor';
import * as S from './PostsTable.style';

function sortPosts(posts) {
  return [...posts].sort((a, b) => a.createdAt.getMinutes() - b.createdAt.getMinutes());
}

function getDisplayTime({ createdAt }) {
  return createdAt
    .toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    .toLowerCase();
}

function PostsTable({ posts }) {
  return (
    <S.Container>
      <S.Headline>
        Posts
      </S.Headline>

      <S.Table>
        <thead>
          <S.Row>
            <S.HeaderColumn>Title</S.HeaderColumn>
            <S.HeaderColumn>Time Posted</S.HeaderColumn>
            <S.HeaderColumn>Score</S.HeaderColumn>
            <S.HeaderColumn>Comments</S.HeaderColumn>
            <S.HeaderColumn>Author</S.HeaderColumn>
          </S.Row>
        </thead>

        <tbody>
          {
            sortPosts(posts).map((post) => (
              <S.Row key={post.url}>
                <S.TitleColumn>
                  <S.Link
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.title}
                  </S.Link>
                </S.TitleColumn>
                <S.Column>
                  {getDisplayTime(post)}
                </S.Column>
                <S.Column>
                  {post.score}
                </S.Column>
                <S.Column>
                  {post.numComments}
                </S.Column>
                <S.AuthorColumn>
                  <PostAuthor author={post.author} />
                </S.AuthorColumn>
              </S.Row>
            ))
          }
        </tbody>
      </S.Table>
    </S.Container>
  );
}

PostsTable.propTypes = {
  posts: arrayOf(propTypes.post).isRequired,
};

export default PostsTable;