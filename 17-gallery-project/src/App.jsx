import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=15`,
      );
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="min-h-screen bg-black text-white px-10 py-8 flex flex-col justify-center">
      {userData.length === 0 ? (
        <h3 className="text-center text-xl font-semibold">Loading...</h3>
      ) : (
        <div className="grid grid-cols-5 gap-x-8 gap-y-8 place-items-center">
          {userData.map((elem) => (
            <Card key={elem.id} elem={elem} />
          ))}
        </div>
      )}

      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          disabled={index === 1}
          className="bg-yellow-600 hover:bg-yellow-700 active:scale-95 transition-all px-5 py-2 rounded-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => {
            if (index > 1) {
              setUserData([]);
              setIndex(index - 1);
            }
          }}
        >
          Prev
        </button>

        <h2 className="text-xl font-semibold">Page {index}</h2>

        <button
          className="bg-yellow-600 hover:bg-yellow-700 active:scale-95 transition-all px-5 py-2 rounded-md font-semibold"
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
