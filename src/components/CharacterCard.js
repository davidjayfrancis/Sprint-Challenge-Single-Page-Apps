import React from "react";
import CharacterList from "./CharacterList.js";
// import jssPluginPropsSort from "jss-plugin-props-sort";

export default function CharacterCard(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Species: {props.species}</p>
    </div>
  );
}
