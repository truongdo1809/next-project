"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
const Navigation = () => {
  return (
    <div className="px-[10px] lg:px-[50px] flex items-center justify-between">
      <div className="text-3xl lg:hidden block">
        <FiMenu />
      </div>
      <Link href={"/"}>
       
        <div>
          <Image
            src="/home/logo.webp"
            alt="logo"
            height={62}
            width={220}
            className=" "
          />
        </div>
      </Link>
      <div className="hidden lg:block z-[1000]">
        <ul className="flex items-center gap-10 font-bold text-[13px] xl:text-[17px]     ">
          <li className="py-[25px] tracking-[1px]">
            <Link href={"/"}>HOME</Link>
          </li>
          <li className="py-[25px] tracking-[1px] flex items-center relative  trasition-all menu-item">
            <Link href={"/product"}>PRODUCT</Link>
            <IoChevronDownOutline className="icon-menu absolute text-xl  -right-5  xl:-right-5 xl:top-7 transition-all cursor-pointer " />

            <div className=" subnav-menu absolute -bottom-[450px]  -left-[700px]   w-[1700px] bg-white h-[400px]">
              <ul className="subnav-menu-item mx-auto gap-5 py-6 flex items-center justify-center text-center ">
                <li>
                  <Link href={"/product"}>
                    <Image
                      width={300}
                      height={300}
                      src="/home/menu-img-1.jpg"
                      alt="menu-img-1"
                    />
                    <span className="pt-[100px]">Đầm</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/product"}>
                    <Image
                      width={300}
                      height={300}
                      src="/home/menu-img-2.webp"
                      alt="menu-img-2"
                    />
                    <span>Chân váy</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/product"}>
                    <Image
                      width={300}
                      height={300}
                      src="/home/menu-img-3.webp"
                      alt="menu-img-3"
                    />
                    <span>Áo </span>
                  </Link>
                </li>
                <li>
                  <Link href={"/product"}>
                    <Image
                      width={300}
                      height={300}
                      src="/home/menu-img-4.jpg"
                      alt="menu-img-4"
                    />
                    <span>Quần</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="py-[25px] tracking-[1px]">
            <Link href={"/"}>COLLECTION</Link>
          </li>
          <li className="py-[25px] tracking-[1px]">
            <Link href={"/"}>LADY ME</Link>
          </li>
          <li className="py-[25px] tracking-[1px]">
            <Link href={"/"}>SHOWROOM</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center text-[22px] gap-7 ">
        <span className="">
          <BsSearch />
        </span>
        <span>
          <IoPersonOutline />
        </span>
        <Link href={"/cart"} className="hidden lg:block">
          <span className="relative">
            <BsBag />
            <div className=" absolute -top-2 items-center -right-3 flex justify-center  bg-red-500 text-white rounded-full text-[10px] w-5 h-5 ">
              2
            
             
            </div>
          </span>
          
        </Link>
      </div>
      
    </div>
  );
};

export default Navigation;
