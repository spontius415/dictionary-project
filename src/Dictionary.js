import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("sunrise");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "4bt8b93f064b82fc559aa03do3abc2f3";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "h81XIEXaSl4UbAN1R6DpOMwBqvGaJuaq6zQo84Ouxx4TriBvew7WAelJ";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
  }
}
