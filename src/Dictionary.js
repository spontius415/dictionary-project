import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("sunrise");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "4bt8b93f064b82fc559aa03do3abc2f3";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChangeSet(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <div className="search">
            <form onSubmit={handleSubmit} className="searchbar">
              <input
                type="search"
                onChange={handleKeywordChangeSet}
                placeholder="sunrise"
              />
            </form>
            <span className="hint">e.g. bug, turtleneck, clarity</span>
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
  }
}
