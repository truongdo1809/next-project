"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
const Navigation = () => {
  const [input,setInput] =useState(false)
  const HandleClick = ()=>{
    setInput(true)
  }
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

            <div className=" subnav-menu absolute top-[100px]  -left-[700px]   w-[1700px] bg-white h-[550px]">
              <ul className="subnav-menu-item mx-auto gap-5 py-6 flex items-center justify-center text-center flex-wrap max-w-[1000px] " >
                <li>
                  <Link href={"/product"}>
                    <Image
                      width={200}
                      height={200}
                      src="/home/menu-img-1.jpg"
                      alt="menu-img-1"
                    />
                    <span >Đầm</span>
                  </Link>
                </li>
               
                <li>
                  <Link href={"/product"}>
                    <Image
                      width={200}
                      height={200}
                      src="/home/menu-img-2.webp"
                      alt="menu-img-2"
                    />
                    <span>Chân váy</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/product"}>
                    <Image
                      width={200}
                      height={200}
                      src="/home/menu-img-3.webp"
                      alt="menu-img-3"
                    />
                    <span>Áo </span>
                  </Link>
                </li>
                <li>
                  <Link href={"/product"}>
                    <Image
                      width={200}
                      height={200}
                      src="/home/menu-img-4.jpg"
                      alt="menu-img-4"
                    />
                    <span>Quần</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/product"}>
                    <Image
                      width={200}
                      height={200}
                      src="/home/menu-img.5.webp"
                      alt="menu-img-1"
                    />
                    <span >Jumpsuit</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/product"}>
                    <Image
                      width={200}
                      height={200}
                      src="/home/menu-img.6.webp"
                      alt="menu-img-1"
                    />
                    <span >Homewear</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/product"}>
                    <Image
                      width={200}
                      height={200}
                      src="/home/menu-img.7.webp"
                      alt="menu-img-1"
                    />
                    <span className="pt-[100px]">Áo khoác</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/product"}>
                    <Image
                      width={200}
                      height={200}
                      src="/home/menu-img.8.webp"
                      alt="menu-img-1"
                    />
                    <span >Phụ kiện</span>
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
        <span className=" cursor-pointer" onClick={HandleClick} >
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
      <div>
      <div className={`${input ? "top-0":""} menu-input absolute bg-white w-full -top-[500px]  left-0 flex items-center justify-between px-[50px]  z-[10000] `}>
      <div className="py-8">
          <Image
            src="/home/logo.webp"
            alt="logo"
            height={62}
            width={220}
            className=" "
          />
        </div>
        <div className=" relative w-6/12  ">
          <input type="text" placeholder="Tìm Kiếm Sản Phẩm..."  className=" py-3 pr-[50px] pl-[32px] border w-full focus:outline-black"/>
          <FiSearch  className=" absolute right-4 top-4 text-xl text-[#666] "/>
        </div>
        <div>
        <AiOutlineClose  className="text-3xl mb-10"/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navigation;
