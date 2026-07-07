//Simple String example
// import React, { useState } from "react";

// const App = () => {
//   const [num, setnum] = useState({ user: "Anikesh", age: 20 });

//   const btnClicked = () => {
//     const newNum = { ...num };
//     newNum.user = "Akshat";
//     newNum.age = 14;
//     console.log(newNum);
//     setnum(newNum);
//   };

//   return (
//     <div>
//       <h1>
//         {num.user}, {num.age}
//       </h1>
//       <button onClick={btnClicked}>Click me</button>
//     </div>
//   );
// };

// export default App;

//Array example
// import React, { useState } from "react";

// const App = () => {
//   const [num, setnum] = useState([10, 20, 30]);
//   const btnClicked = () => {
//     const newNum = [...num];
//     newNum.push(40);
//     setnum(newNum);
//   };
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>Click me</button>
//     </div>
//   );
// };

// export default App;

//Batch example
import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);
  const btnClicked = () => {
    setnum((prev) => prev + 1);
    setnum((prev) => prev + 1);
    setnum((prev) => prev + 1);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click me</button>
    </div>
  );
};

export default App;
