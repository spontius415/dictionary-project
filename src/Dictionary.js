import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
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
    alert(`Searching for ${keyword} definition`);
  }

  function search() {
    let apiKey = "4bt8b93f064b82fc559aa03do3abc2f3";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
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
                onChange={handleKeywordChange}
                placeholder="sunset"
              />
            </form>
            <span>e.g. enchant, battle, delight</span>
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
  }
}
