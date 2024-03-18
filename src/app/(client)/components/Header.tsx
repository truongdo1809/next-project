import React from "react";
import { IoNotifications } from "react-icons/io5";
const Header = () => {
  return (
    <div className="lg:block hidden">
      <div className="w-full  px-[50px] text-sm py-1 text-white bg-black flex items-center justify-between">
        <div>
          <span>
            Hotline CSKH: <strong>18001731 </strong>
          </span>
          -<span> Hotline mua hàng:</span>
          <strong> 18001732</strong>
          <span className="px-3">|</span>
          <span>Hệ thống showroom</span>
        </div>
        <div className="flex items-center ">
          <span className="relative">
            <IoNotifications className="text-4xl pr-1" />{" "}
            <div className=" absolute top-0 right-0 flex justify-center items-center  bg-red-500 text-white rounded-full text-[10px] w-5 h-5 ">
              2
            </div>
          
          </span>
          <span>Thông báo của tôi </span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
