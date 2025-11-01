import { useState } from "react";
import { useEffect } from "react";


const App = () => {
  const [name, setName] = useState("")
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("form is submitted by", name)
  }
  return (
    <div>
      <form onSubmit={ (e)=>{
        submitHandler(e)
        setName("")
      }} >
        <input type="text" value={name} placeholder="Enter your Name" onChange={(e)=>{
          setName(e.target.value)

        }}/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;