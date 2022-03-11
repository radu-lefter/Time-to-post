import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../common/button';
import * as S from './SearchForm.style';

function SearchForm() {
  const { subreddit: initialSubreddit } = useParams();
  const [subreddit, setSubreddit] = useState(initialSubreddit);
  const onChange = (event) => setSubreddit(event.target.value);

  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${subreddit}`);
  };

  // update input value when URL is updated externally
  // (e.g. when user clicks on search link in header)
  useEffect(() => {
    setSubreddit(initialSubreddit);
  }, [initialSubreddit]);

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Label>
        r /
        <S.Input
          type="text"
          name="subreddit"
          value={subreddit}
          onChange={onChange}
        />
      </S.Label>

      <Button type="submit">
        Search
      </Button>
    </S.Form>
  );
}

export default SearchForm;