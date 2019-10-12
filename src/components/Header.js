import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

const Links = styled.div`
  color: red;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 5px;
  border-bottom: 1px solid rgba(210, 220, 200, 0.5);
`;

// const Link = ({ className, children }) => (
//   <a className={className}>{children}</a>
// );

const StyledLink = styled(Link)`
  color: grey;
  padding: 10px;
  font-size: 1.3em;
  &:hover {
    background: rgb(0, 117, 220);
    color: rgb(220, 220, 220);
  }
`;

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Links>
        <StyledLink to="/">Welcome</StyledLink>
        <StyledLink to="characters">Characters</StyledLink>
      </Links>
    </header>
  );
}
