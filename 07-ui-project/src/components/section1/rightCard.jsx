import 'remixicon/fonts/remixicon.css'
import RightCardContent from './rightCardContent';

const RightCard = (props) => {

  return (
    <div className="h-full w-60 overflow-hidden shrink-0 relative rounded-3xl">
      <img className="h-full wi-full object-cover" src={props.img} />

      <RightCardContent id = {props.id} tag = {props.tag}/>

    </div>
  );
};

export default RightCard;