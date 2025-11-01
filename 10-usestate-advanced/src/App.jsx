import { useState } from "react";

const App = () => {
  const [first, setfirst] = useState(10)
  const btnClicked=()=>{
    setfirst(prev=>(prev + 1))
    setfirst(prev=>(prev + 1))
    setfirst(prev=>(prev + 1))
  }
  return (
    <div>
      <h1>{first}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  );
};

export default App;