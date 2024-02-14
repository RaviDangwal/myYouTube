import React, { useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);

  return (
    <div className="m-4 p-10 h-90 w-96 border border-black">
      <div>
        <button
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
          className="bg-green-400 px-2 m-2"
        >
          increase x
        </button>
        <h1 className="font-bold text-xl">Let={x}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            setY(y + 1);
          }}
          className="bg-green-400 px-2 m-2"
        >
          increase y
        </button>
        <h1 className="font-bold text-xl">state={y}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            ref.current = ref.current + 1;
          }}
          className="bg-green-400 px-2 m-2"
        >
          increase ref
        </button>
        <h1 className="font-bold text-xl">ref={ref.current}</h1>
      </div>
    </div>
  );
};

export default Demo2;
