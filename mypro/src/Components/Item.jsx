import React from "react";

const Item = ({text}) => {
  return (
    <div className="flex justify-center mt-5">
      <div className="w-4/12 h-16 flex gap-2">
        <div className="w-4/5 h-20 bg-blue-500 rounded-md text-md text-white flex items-center p-3 cursor-pointer hover:bg-blue-900">{text}</div>
        <div className="w-1/5 h-20 bg-blue-500 rounded-md text-lg text-white flex justify-center items-center hover:bg-red-500 cursor-pointer"> Delete </div>
      </div>
    </div>
  );
};

export default Item;
