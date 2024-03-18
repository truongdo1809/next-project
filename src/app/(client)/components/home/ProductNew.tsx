"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { BsHandbag } from "react-icons/bs";

const ProductNew = () => {
  const [viewProduct, setViewProduct] = useState("product-new");

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return await axios
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

  const dataProductNew = data.products.slice(0, 10);
  const dataProductSale = data.products.slice(11, 21);

  return (
    <div className="lg:px-[30px] px-[10px] xl:px-[50px] py-[30px]">
      {viewProduct === "product-new" && (
        <div className="flex items-center text-center justify-center mb-8">
          <h2
            className="text-2xl block px-5 pb-3 product-new-title relative cursor-pointer"
            onClick={() => setViewProduct("product-new")}
          >
            Hàng mới về
          </h2>
          <h2
            className="text-2xl block px-5 text-[#777777] hover:text-black pb-3 product-sale-title relative cursor-pointer"
            onClick={() => setViewProduct("product-sale")}
          >
            70%
          </h2>
        </div>
      )}
      {viewProduct === "product-sale" && (
        <div className="flex items-center text-center justify-center mb-8">
          <h2
            className="   text-2xl block px-5 text-[#777777] hover:text-black pb-3 product-new-title relative cursor-pointer"
            onClick={() => setViewProduct("product-new")}
          >
            Hàng mới về
          </h2>
          <h2
            className="text-2xl block px-5 pb-3 product-sale-title relative cursor-pointer "
            onClick={() => setViewProduct("product-sale")}
          >
            70%
          </h2>
        </div>
      )}
      {viewProduct === "product-new" && (
        <div className="product-new">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
            {dataProductNew.map((product: any) => (
              <Link href={"/detail"} key={product.id}>
                <div className="relative product-card">
                  <div className="relative product-img overflow-hidden">
                    <Image
                      width={500}
                      height={397}
                      src={product.thumbnail}
                      layout="responsive"
                      alt=""
                      className="object-contain product-img-default"
                    />
                    <Image
                      width={500}
                      height={397}
                      src={product.thumbnail}
                      alt={product.title}
                      className="object-contain product-hover-img"
                      layout="responsive"
                    />
                    <Image
                      width={500}
                      height={397}
                      src="/product/dam/img-nen.webp"
                      alt=""
                      layout="responsive"
                      className="absolute top-0 left-0"
                    />
                    <div className="absolute left-[53px] -bottom-2 add-cart">
                      <button className="product-button text-base font-bold bg-white px-[30px] py-3 rounded-md">
                        <span className="flex">
                          <BsHandbag className="text-xl pr-1" /> THÊM VÀO GIỎ{" "}
                        </span>{" "}
                      </button>
                    </div>
                  </div>

                  <div className="pt-[10px] px-2 flex flex-col text-base">
                    <span className="block w-full whitespace-nowrap overflow-hidden">
                      {product.title}
                    </span>
                    <span className="font-bold">{product.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center pb-8 block ">
            <Link href={"/product"}>
              <button className=" w-full md:w-auto">
                <span className="section-card  md:px-[120px]  py-4 border border-black rounded-md">
                  <span className="text-base font-medium ">
                    XEM TẤT CẢ HÀNG MỚI VỀ
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      )}
      {viewProduct === "product-sale" && (
        <div className="product-sale">
          <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-10">
            {dataProductSale.map((product: any) => (
              <Link href={"/detail"} key={product.id}>
                <div className="relative product-card">
                  <div className="relative product-img overflow-hidden">
                    <Image
                      width={500}
                      height={397}
                      src={product.thumbnail}
                      layout="responsive"
                      alt=""
                      className="object-contain product-img-default"
                    />
                    <Image
                      width={500}
                      height={397}
                      src={product.thumbnail}
                      alt={product.title}
                      className="object-contain product-hover-img"
                      layout="responsive"
                    />
                    <Image
                      width={500}
                      height={397}
                      src="/product/dam/img-nen.webp"
                      alt=""
                      layout="responsive"
                      className="absolute top-0 left-0"
                    />
                    <div className="absolute left-[53px] -bottom-2 add-cart">
                      <button className="product-button text-base font-bold bg-white px-[30px] py-3 rounded-md">
                        <span className="flex">
                          <BsHandbag className="text-xl pr-1" /> THÊM VÀO GIỎ{" "}
                        </span>{" "}
                      </button>
                    </div>
                  </div>

                  <div className="pt-[10px] px-2 flex flex-col text-base">
                    <span className="block w-full whitespace-nowrap overflow-hidden">
                      {product.title}
                    </span>
                    <span className="font-bold">{product.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center pb-8">
            <Link href={"/product"}>
              <button>
                <span className="section-card px-[120px] py-4 border border-black rounded-md">
                  <span className="text-base font-medium ">
                    XEM TẤT CẢ HÀNG 70%
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductNew;
