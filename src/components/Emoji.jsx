import React from "react";
import emojis from "../data/emojis";
import "./css/emoji.css";
const Emoji = ({ searchTerm }) => {
  return (
    <div className="grid">
      {emojis.reduce((acc, emoji, index) => {
        if (
          emoji.title.includes(searchTerm) ||
          emoji.keywords.includes(searchTerm)
        ) {
          acc.push(
            <p key={index}>
              {/* {emoji.title} */}
              <br />
              {emoji.symbol}
            </p>
          );
        }
        return acc;
      }, [])}
    </div>
  );
};

export default Emoji;
