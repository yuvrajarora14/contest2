import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  let [num, setNum] = useState(1);
  let eror = "";

  const inc = () => {
    setNum(num + 1);
  };

  const dec = () => {
    setNum(num - 1);
  };

  const zero = () => {
    setNum(num - num);
  };

  if (num < 0) {
    eror = "Error : Cannot go below 0";
  } else {
    eror = "";
  }

  console.log(num);
  return (
    <>
      <div>
        <Counter
          Number={num}
          increment={inc}
          decrement={dec}
          Zeroo={zero}
          Errors={eror}
        />
      </div>
    </>
  );
}

export default App;
