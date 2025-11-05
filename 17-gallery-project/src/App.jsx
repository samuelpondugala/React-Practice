import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Button from './components/Buttons';

const App = () => {

  const [userData, setuserData] = useState([])
  const [index, setIndex] = useState(1)

  useEffect(function(){
    getData()
  },[index])
  
  const getData = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setuserData(response.data)
    console.log(response.data)
  }

  let printUserData = <h3 className='text-gray-400 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>
  if(userData.length>0){
    printUserData = userData.map(function(el, idx){
      return <div key={idx}>
        <Card url = {el.url} download_url = {el.download_url} author = {el.author} />
      </div> 
    })
  }
  return (
    <div className="bg-black text-white overflow-auto text-4xl h-screen p-4 w-full font-semibold" >
      <div className='flex flex-wrap gap-5 h-[82%]' >
        {printUserData} 
      </div>
      <Button index={index} setIndex = {setIndex} setuserData={setuserData}/>
    </div>
  );
};

export default App;