import { useState } from "react";

const App = () => {
  const [num,setNum] = useState(0)
  function inc(){
    setNum(num+1)
  }
  function dec(){
    setNum(num-1)
  }
  function jump5num(){
    setNum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={dec}>Decrease</button>
      <button onClick={inc}>Increase</button>
      <button onClick={jump5num}>Increase by 5</button>
    </div>
  );
};

export default App;