import React from 'react';

interface item {
  item: object;
  id: number;
  title: string;
  img: string;
}

function MenuItem({ img }: item) {
  return (
    <div className="flex justify-center items-center">
      <img
        src={img}
        className="item  w-[50px] cursor-pointer fill-inherit bg-[white] p-[10px] rounded-[50%] "
        alt="not"
      />
    </div>
  );
}

export default MenuItem;
