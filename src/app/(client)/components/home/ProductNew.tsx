"use client";
import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsHandbag } from "react-icons/bs";
const ProductNew = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return axios
        .get("https://dummyjson.com/products")
        .then((res) => res.data);
    },
  });

  if (isLoading) {
    return <div>isLoading...</div>;
  }
  if (isError) {
    return <div> {JSON.stringify(error)}</div>;
  }
  console.log(data);
  return (
    <div className="px-[50px] py-[30px]">
      <div className=" flex items-center text-center justify-center">
        <h2 className=" text-2xl block px-5  pb-3 product-new-title relative cursor-pointer">
          Hàng mới về
        </h2>
        <h2 className="text-2xl  block px-5 text-[#777777] hover:text-black  pb-3 product-sale-title relative cursor-pointer">
          70%
        </h2>
      </div>
      <div className="grid grid-cols-5">
        <Link href={"/detail"}>
          <div className="relative product-card">
            <div className="relative product-img overflow-hidden">
              <Image
                width={500}
                height={397}
                src="/product/dam/product-1.jpg"
                layout="responsive"
                alt=""
                className=" object-cover product-img-default "
              />
              <Image
                width={500}
                height={397}
                src="/product/dam/product-1.1.jpg"
                alt=""
                className="  object-cover product-hover-img"
                layout="responsive"
              />
              <Image
                width={500}
                height={397}
                src="/product/dam/img-nen.webp"
                alt=""
                layout="responsive"
                className=" absolute top-0 left-0"
              />
              <div className=" absolute left-[53px] -bottom-2 add-cart">
                <button className=" product-button text-base font-bold bg-white   px-[30px] py-3 rounded-md   ">
                  <span className="flex">
                    <BsHandbag className="text-xl pr-1" /> THÊM VÀO GIỎ{" "}
                  </span>{" "}
                </button>
              </div>
            </div>

            <div className="pt-[10px] px-2 flex flex-col text-base ">
              <span className=" block w-full whitespace-nowrap  overflow-hidden">
                Đầm tay dài, Dáng ôm 24SDKE266F{" "}
              </span>
              <span className=" font-bold">1,999,000đ</span>
            </div>
          </div>
        </Link>
      </div>
      
      <div className=" mt-8 text-center pb-8">
        <Link href={"/product"}>
          <button>
          <span className="section-card  px-[120px] py-4 border border-black rounded-md">
            <span className="text-base font-medium ">
              XEM TẤT CẢ HÀNG MỚI VỀ
            </span>
          </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductNew;
