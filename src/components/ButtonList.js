import React from "react";
import Button from "./Button";

const list = [
  "Live",
  "All",
  "Gaming",
  "Songs",
  "Cricket",
  "News",
  "Cooking",
  "New",
  "Tech",
  "Gadgets",
  "Database",
  "Indie pop",
  "JavaScript",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button name={item} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
