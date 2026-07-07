import React from "react";

const App = () => {
  const User = {
    user: "Anikesh Jain",
    age: 20,
    city: "Indore",
  };
  //localStorage.setItem("user", JSON.stringify(User));
  //const retrievedUser = JSON.parse(localStorage.getItem("user") || "null");
  //localStorage.removeItem("user");
  //localStorage.clear();

  //console.log(retrievedUser || User);
  return <div>App</div>;
};

export default App;
