import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import "@/src/app/css/home.css"
import Link from "next/link";
const OutstandingProduct = () => {
  return (
    <div className="sm:px-[50px] px-[10px]">
      <h1 className="text-[30px] mb-[30px] font-medium ">Danh mục nổi bật</h1>

      <div className="grid  lg:grid-cols-4 grid-cols-2  gap-7">
      <Link href={"/product"}>
        <div className=" relative  card-1">
          <Image width={500} height={500} src="/home/productCard-1.webp" alt="productCart-1" className="card-1-img   max-w-[100%]" />
          <div className="flex items-center px-[15px] py-[20px] justify-between absolute bottom-0 left-0 w-full bg-[#e5e5e569] ">
           <span className=" text-[25px] font-medium">Đầm</span>
            <span className="w-[45px] h-[45px]  rounded-full flex items-center justify-center bg-white hover:bg-black hover:text-white"><FiArrowRight className="text-3xl " /></span>
          </div>
        </div>
        </Link>
        <Link href={"/product"}> 
        <div className=" relative  card-1">
          <Image width={500} height={500} src="/home/productCard-2.webp" alt="productCart-2" className="card-1-img    max-w-[100%]" />
          <div className="flex items-center px-[15px] py-[20px] justify-between absolute bottom-0 left-0 w-full bg-[#e5e5e569] ">
          <span className=" text-[25px] font-medium">Áo</span>
            <span className="w-[45px] h-[45px]  rounded-full flex items-center justify-center bg-white hover:bg-black hover:text-white"><FiArrowRight className="text-3xl " /></span>
          </div>
        </div>
        </Link>
        <Link href={"/product"}>  
        <div className=" relative  card-1">
          <Image width={500} height={450} src="/home/productCard-3.webp" alt="productCart-3" className="card-1-img  objectfit-cover  max-w-[100%]" />
          <div className="flex items-center px-[15px] py-[20px] justify-between absolute bottom-0 left-0 w-full bg-[#e5e5e569]  ">
            <span className=" text-[25px] font-medium">Chân váy</span>
            <span className="w-[45px] h-[45px]  rounded-full flex items-center justify-center bg-white  hover:bg-black hover:text-white"><FiArrowRight className="text-3xl " /></span>
          </div>
        </div>
        </Link>
        <Link href={"/product"}> 
        <div className=" relative  card-1">
          <Image width={500} height={500} src="/home/productCard-4.webp" alt="productCart-4" className="card-1-img    max-w-[100%]" />
          <div className="flex items-center px-[15px] py-[20px] justify-between absolute bottom-0 left-0 w-full bg-[#e5e5e569] ">
           <span className=" text-[25px] font-medium">Quần</span>
            <span className="w-[45px] h-[45px]  rounded-full flex items-center justify-center bg-white hover:bg-black hover:text-white"><FiArrowRight className="text-3xl" /></span>
          </div>
        </div>
        </Link>
      </div>
    </div>
    
  );
}; 

export default OutstandingProduct;
