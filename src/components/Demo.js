import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  //   console.log("Rendering..");

  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-10 h-90 w-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="border border-gray-400 m-3 p-3 hover:bg-blue-300"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle theme
        </button>
      </div>
      <div>
        <input
          className="border border-black p-2 w-72 bg-slate-300"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold">nth prime :{prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
