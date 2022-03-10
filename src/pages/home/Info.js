import React from 'react';
import { string, node } from 'prop-types';
import * as S from './Info.style';

function Info({ id, headline, children }) {
  return (
    <S.Article id={id}>
      <S.Headline>
        {headline}
      </S.Headline>

      <S.Content>
        {children}
      </S.Content>
    </S.Article>
  );
}

Info.propTypes = {
  id: string.isRequired,
  headline: string.isRequired,
  children: node.isRequired,
};

export default Info;