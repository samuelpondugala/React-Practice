
const Card = (props) => {
  return (
    <>
      <div className="h-40 w-47 bg-white rounded-xl overflow-hidden" >
          <a href={props.url} target="_blank">
            <img className='h-full w-full object-cover'src={props.download_url} />
          </a>
        </div>
        <h2 className='text-lg font-semibold' >{props.author}</h2>
    </>
  );
};

export default Card;