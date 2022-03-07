import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { ReactComponent as UnstyledLogo } from './logo.svg';

export const Container = styled.header`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(UnstyledLogo)`
  margin-top: 8px;
`;

export const Link = styled(UnstyledLink)`
  margin-left: 26px;
  text-decoration: none;
  color: ${(props) => props.theme.color.midDark};
`;