import React from "react";
import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as Box } from "assets/box.svg";
import { ReactComponent as Lightning } from "assets/lightning.svg";
import { ReactComponent as Avatar } from "assets/Avatar-default.svg";
import { ReactComponent as Hexagon } from "assets/hexagon.svg";
import { ReactComponent as HexagonBlack } from "assets/hexagon-black.svg";
import Pagination from "components/Pagination";

function App() {
  return (
    <div className="bg-[#000] ">
      <div className="main-container flex items-center h-screen">
        <div className="pl-[46px] pr-[71px] pt-[30px] pb-[50px] w-[440px] border-y-2 border-y-[#fff] border-l-2 border-l-[#fff]">
          <Logo />
          <div className="flex mt-10 gap-3">
            <button className="rounded-[16px] bg-[#E1E1E1] px-4 py-[6px] flex gap-2 items-center font-medium text-xs">
              <Box /> V1.0
            </button>
            <button className="rounded-[16px] bg-[#E1E1E1] px-4 py-[6px] flex gap-2 items-center">
              <Lightning />
              The Hearts Project
            </button>
          </div>
          <div className="mt-8 ">
            <h1 className="uppercase font-bold text-[#fff] text-[80px] leading-[90px]">
              3PORT
            </h1>
            <h3 className="font-normal text-[32px] leading-[38px] text-[#fff]">
              MetaConverter
            </h3>
          </div>
          <div className="mt-12 flex gap-2 flex-wrap">
            <button className="rounded-[24px] bg-[#fff] px-[20px] py-2 uppercase font-bold text-base">
              3d avatar
            </button>
            <button className="rounded-[24px] bg-[#fff] px-[20px] py-2 uppercase font-bold text-base">
              game ready
            </button>
            <button className="rounded-[24px] bg-[#fff] px-[20px] py-2 uppercase font-bold text-base">
              rigged
            </button>
            <button className="rounded-[24px] bg-[#fff] px-[20px] py-2 uppercase font-bold text-base">
              metaverse ready
            </button>
            <button className="rounded-[24px] bg-[#fff] px-[20px] py-2 uppercase font-bold text-base">
              pfp to life
            </button>
            <button className="rounded-[24px] bg-[#fff] px-[20px] py-2 uppercase font-bold text-base">
              convert
            </button>
          </div>
        </div>
        <div className="bg-[#fff] relative pl-9 py-9 w-[600px]">
          <div className="absolute right-[15px] top-[15px]">
            <Avatar />
          </div>
          <div className="flex gap-[63px]">
            <img
              src="images/nft.png"
              className="w-[238px] h-[200px]"
              alt="NFT"
            />
            <div className="flex flex-col">
              <button className="uppercase flex gap-3 px-6 py-4 bg-[#000] text-[#fff] font-bold text-base rounded-[8px] w-fit">
                <Hexagon />
                APPROVE
              </button>
              <button className="uppercase flex gap-[15px] px-6 py-4 bg-[#fff] text-[#000] font-bold text-base rounded-[8px] border-2 border-[#000] mt-2 w-fit">
                <HexagonBlack />
                PAY0.09ETH
              </button>
            </div>
          </div>
          <div className="-translate-x-[20px]">
            <Pagination />
          </div>
          <div className="flex gap-[63px] mt-6">
            <img
              src="images/nft.png"
              className="w-[238px] h-[200px]"
              alt="NFT"
            />
            <div className="flex flex-col items-end justify-end">
              <button className="uppercase flex gap-[15px] px-6 py-4 bg-[#fff] text-[#000] font-bold text-base rounded-[12px] border-2 border-[#000] mt-2 w-fit">
                <HexagonBlack />
                File Format: .fbx
              </button>
              <button className="flex gap-[10px] mt-[14px] bg-[#E1E1E1] rounded-[16px] h-8 px-3 items-center font-medium text-xs">
                <HexagonBlack className="w-3" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
