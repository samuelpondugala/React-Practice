import RightCard from "./rightCard"


const RightContent = (props) => {
  return (
    <div id="right" className='h-full w-2/3  p-3 flex overflow-x-auto flex-nowrap gap-8'>
      {props.users.map((el, idx)=>{
        return <RightCard key ={idx} id ={idx} img={el.img} tag = {el.tag} intro = {el.intro} />
      })}
    </div>
  )
}

export default RightContent
