import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <section>
      <h2>{props.meaning.partOfSpeech}</h2>
      <div>{props.meaning.definition}</div>
      <div className="example-sentence">{props.meaning.example}</div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </section>
  );
}
