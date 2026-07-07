import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full w-80 shrink-0 overflow-hidden relative bg-red-500 rounded-4xl">
      <img
        src={props.img}
        alt="Right Card"
        className="w-full h-full object-cover rounded-4xl"
      />
      <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
