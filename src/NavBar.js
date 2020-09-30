import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px;
`;

const LinkWrapper = styled.div`
  margin-right: 20px;
  display: inline-block;
`;

const linkStyles = {
  textDecoration: 'none',
  color: 'blue',
  fontSize: '24px',
};

const getColor = (history, path) => {
  let color;
  if (history.location.pathname === path) {
    color = 'orangered';
  } else {
    color = '#2196f3';
  }

  return color;
};

const NavBar = withRouter(({ history }) => {
  return (
    <NavContainer>
      <LinkWrapper>
        <Link to="/" style={{ ...linkStyles, color: getColor(history, '/') }}>
          Home
        </Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link
          to="/counter"
          style={{ ...linkStyles, color: getColor(history, '/counter') }}
        >
          Counter
        </Link>
      </LinkWrapper>
    </NavContainer>
  );
});

export default NavBar;
