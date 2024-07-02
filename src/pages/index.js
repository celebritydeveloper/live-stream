import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import coin from "@/assets/images/coin.png";
import user from "@/assets/images/user.jpeg";
import gift from "@/assets/images/gift.svg";
import emotion from "@/assets/images/emotion.svg";
import megaphone from "@/assets/images/megaphone.svg";
import Nav from "@/components/Nav";
import commentData from "@/data/comments.json"
import Comment from "@/components/Comment";

export default function Home() {
  const [comments, setComments] = useState(commentData);
  return (
    <React.Fragment>
      <Nav />
      <main className="min-h-screen main-bg px-[5rem] font-MatterMedium">

        <div className="fixed right-24 bottom-3 w-[320px]"> 
          <div className="rounded-bl-[10px] rounded-br-[10px] mb-5 backdrop-blur-sm">
            <div className="text-right bg-[#060809] bg-opacity-40 rounded-tl-[10px] rounded-tr-[10px] py-2 px-2">
              <button className="text-[11px] font-medium">Hide comments</button>
            </div>

            <div className="bg-[#060809] bg-opacity-50 px-6 py-1 rounded-bl-[10px] rounded-br-[10px]">
              { comments.map((comment) => (
                <Comment comment={comment} key={comment.id} />
              ))}

            </div>
          </div>
          
          <form className="w-full">
            <div className="flex items-center gap-3 mb-4 h-[35px] rounded-[8px] pr-1 bg-[#27292E] border border-[#343F4B] w-full">
              <input type="text" className="w-full h-full bg-transparent rounded-[8px] outline-none pl-2" />
              <span className="h-[27px] w-[27px] rounded-[6px] bg-[#343F4B] inline-flex justify-center items-center">
                <Image src={emotion} width={15} height="auto" alt="" />
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center p-[4px] py-4 rounded-[98px] bg-[#BACFF7] bg-opacity-5 border-2 
              border-[#BACFF7] border-opacity-5 h-[32px] w-[148px]">
                <span className="h-[24px] w-[24px] rounded-full flex items-center justify-center bg-[#BACFF7] bg-opacity-5
                border-2 border-[#BACFF7] border-opacity-5">
                  <Image src={coin} width={15} height="auto" alt="" />
                </span>

                <span className="text-[10px] font-MatterMedium">5200 Coins</span>

                <button className="text-[10px] font-MatterMedium h-[24px] w-[43px] rounded-[98px] bg-[#BACFF7] bg-opacity-5
                border-2 border-[#BACFF7] border-opacity-5">Send</button>
              </div>

              <div className="h-[32px] w-[85px]">
                <button className="w-full h-full text-[10px] font-MatterMedium  rounded-[98px] bg-[#BACFF7] bg-opacity-5
                border-2 border-[#BACFF7] border-opacity-5">Add Coins</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </React.Fragment>
  );
}
