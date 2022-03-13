import React from 'react';
import { string } from 'prop-types';
import * as S from './PostsTable.style';

function PostAuthor({ author }) {
  if (author === '[deleted]') {
    return author;
  }

  return (
    <S.Link
      href={`https://reddit.com/u/${author}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {author}
    </S.Link>
  );
}

PostAuthor.propTypes = {
  author: string.isRequired,
};

export default PostAuthor;