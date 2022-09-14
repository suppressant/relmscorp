import React from "react";
import { ReactComponent as ChevronLeft } from "assets/chevron-left.svg";
import { ReactComponent as ChevronsLeft } from "assets/chevrons-left.svg";
import { ReactComponent as DotLine } from "assets/dot-line.svg";
import { ReactComponent as ChevronRight } from "assets/chevron-right.svg";
import { ReactComponent as ChevronsRight } from "assets/chevrons-right.svg";


const Pagination = () => {
  return (
    <div className="flex gap-[10px] items-center mt-6">
      <ChevronLeft className="cursor-pointer"/>
      <ChevronsLeft className="cursor-pointer"/>
      <div className="flex gap-2">
        <button className="rounded-[12px] bg-[#000] text-[#fff] w-10 h-10 flex items-center justify-center">
          1
        </button>
        <button className="rounded-[12px] bg-[#000] text-[#fff] w-10 h-10 flex items-center justify-center">
          2
        </button>
        <button className="rounded-[12px] bg-[#000] text-[#fff] w-10 h-10 flex items-center justify-center">
          3
        </button>
        <DotLine className="cursor-pointer"/>
      </div>
      <ChevronRight className="cursor-pointer"/>
      <ChevronsRight className="cursor-pointer" />
    </div>
  );
};

export default Pagination;
