import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div>
        <section>
          <h2>{props.results.word}</h2>
          <div>
            <Phonetics phonetics={props.results.phonetic} />
          </div>
        </section>
        <p>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
