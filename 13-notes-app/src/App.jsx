import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    var copyTask = [...task]
    copyTask.push({title,details})
    setTask(copyTask)
    setTitle("")
    setDetails("")
  }
  const deleteNote = (idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)

    
  }
  return (
    <div className="h-screen lg:flex bg-black text-white " >
      <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }} 
      className="flex items-start lg:w-1/2 flex-col gap-4 p-10">
          <h1 className='text-4xl font-bold'>Add Notes</h1>
          {/* first input */}
          <input 
          value={title} 
          onChange={(e)=>{
            setTitle(e.target.value)
          }} 
          type="text" 
          placeholder="Enter Notes Heading" 
          className="outline-none px-5 py-2 w-full border-2 rounded" />
          {/* detaled input */}
          <textarea 
          value={details} 
          onChange={(e)=>{
            setDetails(e.target.value)
          }} 
          type="text" 
          placeholder="Write Details"
          className="outline-none px-5 py-2 w-full h-20 border-2 rounded" />
          <button 
          className="bg-white w-full active:scale-95 text-black font-bold rounded py-2 px-5 cursor-pointer" 
          >Add Notes
          </button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1> 
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function(el, idx){
            return (
              <div key={idx} className=' relative flex justify-between flex-col items-center h-52 bg-cover w-40 rounded-xl bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] text-black px-4 py-8'>
                <div>
                  <h1 className='leading-tight text-lg font-bold' >{el.title}</h1>
                  <p className='mt-2 leading-tight font-medium text-sm text-gray-500' >{el.details}</p>
                </div>
                <button onClick={()=>{
                  deleteNote(idx)
                }}
                className='active:scale-95 cursor-pointer py-1 px-8 bg-red-600 text-white rounded text-[10px] font-bold '>Delete</button>
              </div>
            )
          })}
            
        </div>
      </div> 
    </div>
  );
};

export default App;