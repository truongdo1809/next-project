import Image from "next/image";
import React from "react";

const Media = () => {
  return (
   <div>
    <div className=" text-center bg-[#F5F5F5]">
        <h1 className=" text-2xl font-medium block py-8 ">Follow us on media</h1>
    </div>
     <div className="grid grid-cols-2  lg:grid-cols-4 gap-[1px] ">
      <div className=" relative  cursor-pointer w-full media-item">
        <Image width={500} height={500} src="/home/media.img-1.webp" alt=""  className=" object-cover"/>
        <div className="absolute top-0 left-0 w-full h-full media-info ">
          <div className=" w-full h-full flex justify-center items-center ">
          <span className=" bg-white w-[90px] h-[90px] rounded-full flex justify-center items-center">
          <Image
           
            width={40}
            height={40}
            src="/home/media.img-5.webp"
            alt=""
            />
          </span>
          </div>
        </div>
      </div>
      <div className=" relative  cursor-pointer w-full media-item">
        <Image width={500} height={500} src="/home/media.img-2.webp" alt=""  className=" object-cover"/>
        <div className="absolute top-0 left-0 w-full h-full media-info ">
          <div className=" w-full h-full flex justify-center items-center ">
          <span className=" bg-white w-[90px] h-[90px] rounded-full flex justify-center items-center">
          <Image
           
            width={40}
            height={40}
            src="/home/media.img-6.webp"
            alt=""
            />
          </span>
          </div>
        </div>
      </div><div className=" relative  cursor-pointer w-full media-item">
        <Image width={500} height={500} src="/home/media.img-3.webp" alt=""  className=" object-cover"/>
        <div className="absolute top-0 left-0 w-full h-full media-info ">
          <div className=" w-full h-full flex justify-center items-center ">
          <span className=" bg-white w-[90px] h-[90px] rounded-full flex justify-center items-center">
          <Image
           
            width={40}
            height={40}
            src="/home/media.img-7.webp"
            alt=""
            />
          </span>
          </div>
        </div>
      </div><div className=" relative  cursor-pointer w-full media-item">
        <Image width={500} height={500} src="/home/media.img-4.webp" alt=""  className=" object-cover"/>
        <div className="absolute top-0 left-0 w-full h-full media-info ">
          <div className=" w-full h-full flex justify-center items-center ">
          <span className=" bg-white w-[90px] h-[90px] rounded-full flex justify-center items-center">
          <Image
           
            width={40}
            height={40}
            src="/home/media.img-8.webp"
            alt=""
            />
          </span>
          </div>
        </div>
      </div>
    </div>
   </div>

  );
};

export default Media;
