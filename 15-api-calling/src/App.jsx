import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([])

  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }
  
  
  return (
    <div>
      {data.map(function(el, i){
        return (
          <div>
            <h1>{el.id}, {el.author}</h1>
            <img src={el.download_url}/>
          </div>
        )
      })}
      
      <button onClick={getData} >Click</button>
    </div>
  );
};

export default App;