import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1/users",
    );
    setData(data);
  };
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function (elem, idx) {
          return (
            <h1>
              {idx} hello {elem.name}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default App;
