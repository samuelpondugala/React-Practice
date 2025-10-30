
const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-6  flex flex-col justify-between" >
        <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-black text-2xl font-semibold'>{props.id+1}</h2>
        <div><div>
            <p className='text-sm leading-relaxed text-gray-200 mb-10 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure eligendi nostrum quisquam voluptas quas eius! Lorem ipsum dolor sit amet.           </p>
        </div>
        <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-mono px-7 py-2 rounded-full text-sm
            font-semibold'>{props.tag}</button>
            <button className='bg-blue-600 text-white font-mono px-3 py-2 rounded-full '><i className="ri-arrow-right-line"></i></button>
        </div>
        </div>
      </div>
  );
};

export default RightCardContent;