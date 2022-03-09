import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Footer.style';

function Footer() {
  return (
    <S.Container>
      <S.LeftLink as="a" href="https://www.rezistenta-online.ro/">
        rezistenta online
      </S.LeftLink>

      <Link to="/">
        <S.Logo />
      </Link>

      <S.RightLink to="/terms">
        Terms & Privacy
      </S.RightLink>
    </S.Container>
  );
}

export default Footer;

