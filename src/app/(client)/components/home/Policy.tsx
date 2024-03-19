import Image from "next/image";
import React from "react";

const Policy = () => {
  return (
    <div className=" grid sm:grid-cols-2 grid-cols-1   xl:grid-cols-4 px-[50px] py-10 border-t gap-6 xl:gap-0">
      <div className=" flex items-center">
        <div>
          <Image
            height={48}
            width={48}
            src="/home/home_policy_icon_1.webp"
            alt=""
          />
        </div>
        <div className=" pl-[15px]">
          <h2 className=" text-base font-medium">Miễn phí vận chuyển</h2>
          <span className=" text-sm ">Miễn phí đơn hàng từ 699.000đ</span>
        </div>
      </div>
      <div className=" flex items-center">
        <div>
          <Image
            height={48}
            width={48}
            src="/home/home_policy_icon_2.webp"
            alt=""
          />
        </div>
        <div className=" pl-[15px]">
          <h2 className=" text-base font-medium">Miễn phí cước đổi hàng</h2>
          <span className=" text-sm ">
            Đổi trả hàng sau 7 ngày nếu không vừa ý
          </span>
        </div>
      </div>
      <div className=" flex items-center">
        <div>
          <Image
            height={48}
            width={48}
            src="/home/home_policy_icon_3.webp"
            alt=""
          />
        </div>
        <div className=" pl-[15px]">
          <h2 className=" text-base font-medium">Tổng Đài Bán Hàng Miễn Phí</h2>
          <span className=" text-sm ">
            Gọi <strong>1800.1732</strong> để được tư vấn
          </span>
        </div>
      </div>
      <div className=" flex items-center">
        <div>
          <Image
            height={48}
            width={48}
            src="/home/home_policy_icon_4.webp"
            alt=""
          />
        </div>
        <div className=" pl-[15px]">
          <h2 className=" text-base font-medium">Thanh toán đa dạng</h2>
          <span className=" text-sm ">Phương thức thanh toán đa dạng</span>
        </div>
      </div>
    </div>
  );
};

export default Policy;
