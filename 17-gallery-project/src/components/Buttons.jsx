
const Button = (props) => {
  return (
    <div className='flex justify-center items-center p-4 gap-5'>
        <button style={{opacity:props.index>1?1:0.5}}
        onClick={()=>{
          if(props.index>1){
            props.setIndex(props.index-1)
            props.setuserData([])
          }
        }}
        className='bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'>Prev</button>
        <h4 className='text-xl' >Page {props.index}</h4>
        <button 
        onClick={()=>{
          props.setIndex(props.index+1)
          props.setuserData([])
        }}
        className='bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'>Next</button>
      </div>
  );
};

export default Button;