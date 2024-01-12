import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return (
              <li key={index}>
                <em>{synonym}</em>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
