import React from "react";
import CharacterList from "./CharacterList.js";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  margin: 10px;
  background: rgba(100, 40, 50, 0.7);
  color: rgb(240, 220, 240);
  border-radius: 10px;
  text-align: center;
`;

export default function CharacterCard(props) {
  return (
    <Card>
      <h3>Name: {props.name}</h3>
      <p>Species: {props.species}</p>
    </Card>
  );
}
