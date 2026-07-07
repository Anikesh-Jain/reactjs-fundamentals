import React from "react";

const App = () => {
  function inputChanging(val) {
    console.log(val);
  }

  const pageScrolling = (elem) => {
    if (elem > 0) {
      console.log("Scrolling Down");
    } else {
      console.log("Scrolling Up");
    }
  };
  return (
    <div>
      <div>
        <input
          onChange={function (elem) {
            inputChanging(elem.target.value);
          }}
          type="text"
          placeholder="Enter Name"
        />
      </div>
      <div
        onMouseMove={(elem) => {
          console.log(elem.clientX, elem.clientY);
        }}
        className="box"
      ></div>
      <div
        onWheel={(elem) => {
          pageScrolling(elem.deltaY);
        }}
      >
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </div>
  );
};
export default App;
