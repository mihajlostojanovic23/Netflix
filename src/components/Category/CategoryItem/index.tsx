import React from 'react';
interface Items {
  title: any;
  id: string;
  color: string;
}

function CategoryItem({ title, color }: Items) {
  return (
    <div
      className={`cat_item w-[200px] h-[200px] border-[black] border-[2px] text-[white] flex items-center justify-center`}
      style={{ background: color }}
    >
      <div className="text w-[100%] h-[100%] flex justify-center items-center bg-[#00000060] ">
        {title}
      </div>
    </div>
  );
}

export default CategoryItem;
