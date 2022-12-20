import React, { useState } from "react";
import "./styles.css";
import data from "./data/data.js";
import translate from "./helper_functions/googleTranslate.js";
import VocabCard from "./components/vocab_card.js";

export default function App() {
  const [vocab, setVocab] = useState([]);

  const add_to_vocab = (e) => {
    e.preventDefault();
    const term = e.target.innerHTML;
    var translation_of_term = "";
    translation_of_term += translate(term);
    if (typeof translation_of_term === "string") {
      setVocab((vocab) => [...vocab, [term, translation_of_term]]);
      console.log("This is state, aka vocab " + vocab);
    }
  };

  //translate();

  return (
    <div className="App">
      <div className="header">Header</div>
      <div className="main-container">
        <div className="text-box">
          Here is the text.
          <div className="text-itself">
            {data.map((item, index) => (
              <span key={index} onClick={add_to_vocab}>
                {item}{" "}
              </span>
            ))}
          </div>
        </div>
        <div className="vocab">
          {vocab.reverse().map((item, index) => (
            <VocabCard key={index} vocab={item[0]} />
          ))}
        </div>
      </div>
    </div>
  );
}
