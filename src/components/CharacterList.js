import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const Title = styled.h3`
  text-align: center;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [people, setPeople] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    async function fetchData() {
      try {
        const peopleList = await axios.get(
          "https://rickandmortyapi.com/api/character/"
        );
        console.log(peopleList);
        setPeople(peopleList.data.results);
      } catch (err) {
        console.log(`Error! ${err}`);
      } //end of try/catch
    } // end of fetch data
    fetchData();
  }, []);

  return (
    <div>
      <section className="character-list">
        <Title>Ricky and Morty Characters</Title>
        <Container>
          {people.map(character => {
            return (
              <CharacterCard
                name={character.name}
                species={character.species}
              />
            );
          })}
        </Container>
      </section>
    </div>
  );
}
