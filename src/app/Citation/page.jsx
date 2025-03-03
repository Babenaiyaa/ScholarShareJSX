// src/app/GenerateCitation/page.jsx
"use client";

import { useState } from "react";

const CitationPage = () => {
  const [citation, setCitation] = useState({
    author: "",
    title: "",
    year: "",
    journal: "",
    publisher: "",
    volume: "",
    issue: "",
    page: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCitation((prevCitation) => ({
      ...prevCitation,
      [name]: value,
    }));
  };

  const generateCitation = () => {
    const { author, title, year, journal, publisher, volume, issue, page } = citation;
    // MLA citation format
    const citationFormat = `${author}. "${title}." *${journal}*, vol. ${volume}, no. ${issue}, ${year}, pp. ${page}. ${publisher}.`;
    return citationFormat;
  };

  return (
    <div>
      <h1>Generate Citation (MLA Format)</h1>
      <form>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={citation.author}
            onChange={handleChange}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={citation.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Year:
          <input
            type="text"
            name="year"
            value={citation.year}
            onChange={handleChange}
          />
        </label>
        <label>
          Journal:
          <input
            type="text"
            name="journal"
            value={citation.journal}
            onChange={handleChange}
          />
        </label>
        <label>
          Publisher:
          <input
            type="text"
            name="publisher"
            value={citation.publisher}
            onChange={handleChange}
          />
        </label>
        <label>
          Volume:
          <input
            type="text"
            name="volume"
            value={citation.volume}
            onChange={handleChange}
          />
        </label>
        <label>
          Issue:
          <input
            type="text"
            name="issue"
            value={citation.issue}
            onChange={handleChange}
          />
        </label>
        <label>
          Page:
          <input
            type="text"
            name="page"
            value={citation.page}
            onChange={handleChange}
          />
        </label>
      </form>
      <div>
        <h2>Generated Citation:</h2>
        <p>{generateCitation()}</p>
      </div>
    </div>
  );
};

export default CitationPage;
