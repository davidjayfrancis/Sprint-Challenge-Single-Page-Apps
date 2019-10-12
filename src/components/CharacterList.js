import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import styled from "styled-components";
import SearchForm from "./SearchForm.js";

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

  // people will get filtered based on the form
  //initialstate will hold the full list of returned objects
  const [people, setPeople] = useState([]);
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    async function fetchData() {
      try {
        const peopleList = await axios.get(
          "https://rickandmortyapi.com/api/character/"
        );
        setPeople(peopleList.data.results);
        setInitialState(peopleList.data.results);
      } catch (err) {
        console.log(`Error! ${err}`);
      } //end of try/catch
    } // end of fetch data
    fetchData();
  }, []);

  const filterCharacters = query => {
    // need initial state so we can reset when queries are deleted/backspaced
    setPeople(initialState);
    setPeople(initialState.filter(x => x["name"].includes(query)));
  };

  return (
    <div>
      <SearchForm searchFn={filterCharacters} />
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
