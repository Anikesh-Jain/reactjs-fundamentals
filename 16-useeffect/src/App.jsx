import React from "react";
import { useState, useEffect } from "react";

//Difficult Example
// const App = () => {
//   const [num, setnum] = useState(0);
//   const [num2, setnum2] = useState(100);
//   useEffect(
//     function () {
//       console.log("useEffect called");
//     },
//     [num],
//   );
//   return (
//     <div>
//       <h1>Value of num is {num}</h1>
//       <h1>Value of num2 is {num2}</h1>
//       <button
//         onMouseEnter={() => setnum(num + 1)}
//         onMouseLeave={() => setnum2(num2 + 10)}
//       >
//         Hover
//       </button>
//     </div>
//   );
// };

// export default App;

//Simple Example
const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aChanging() {
    console.log("A ki value change ho gyi");
  }

  function bChanging() {
    console.log("B ki value change ho gyi");
  }

  useEffect(
    function () {
      aChanging();
    },
    [a],
  );

  useEffect(
    function () {
      bChanging();
    },
    [b],
  );

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Change A
      </button>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        Change B
      </button>
    </div>
  );
};

export default App;
