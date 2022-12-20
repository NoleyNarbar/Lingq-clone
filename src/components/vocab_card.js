import React, { useState } from "react";
import "./vocab_card.css";

const VocabCard = (props) => {
  const [trans, setTrans] = useState("");
  return (
    <div className="card">
      <h2>{props.vocab}</h2>
      <div className="button">Known</div>
      <div className="button translation">See translation</div>
    </div>
  );
};

export default VocabCard;
