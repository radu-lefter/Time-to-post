import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as UnstyledLogo } from './logo-small.svg';

export const Container = styled.footer`
  width: 100%;
  max-width: 980px;
  height: ${(props) => props.theme.size.footerHeight};
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

const linkStyles = css`
  text-decoration: none;
  color: ${(props) => props.theme.color.midDark};
  font-size: ${(props) => props.theme.font.size.small};
  flex: 1;
`;

export const LeftLink = styled(Link)`
  ${linkStyles}
  text-align: left;
`;

export const RightLink = styled(Link)`
  ${linkStyles}
  text-align: right;
`;

export const Logo = styled(UnstyledLogo)`
  display: block;
`;