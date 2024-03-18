"use client"
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import Image from "next/image";

export default function FooterItem() {
 
  return (
   <div className="Acordion">
     <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Văn phòng" className=" ps-[35px] pr-[15px] py-[15px] border-none  focus:border-none focus:outline-none">
      <div className="mb-[15px] mt-[20px]">
            <Image
              width={150}
              height={48}
              src="/home/logo-footer.webp"
              alt="/logo.webp"
            />
          </div>
          <ul className="  mt-[15px] mb-5">
            <li className="mb-2">
              <p className=" text-base font-bold  mb-2">CÔNG TY TNHH MỸ PHỤC</p>
              <span className=" text-sm font-bold ">Trụ sở chính:</span>
              <span className=" text-sm ">
                P404, Tầng 4, Tòa nhà GP Invest, Số 170 đường La Thành, Phường Ô
                Chợ Dừa, Quận Đống Đa, Thành phố Hà Nội
              </span>
            </li>
            <li className=" mb-2">
              <span className="text-sm font-bold">Điện thoại: </span>
              1800 1731
            </li>
            <li className="mb-2">
              <span className="text-sm font-bold">Email: </span>
              onlinesale@evadeeva.com.vn
            </li>
          </ul>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Thông tin liên hệ" className="ps-[35px] pr-[15px] py-[15px]  border-none  focus:border-none focus:outline-none">
      <ul className=" mt-[20px] mb-5 text-sm footer-content block ">
            <li className=" mb-[10px] ps-[18px] relative">Về chúng tôi</li>
            <li className=" mb-[10px] ps-[18px] relative">
              Câu hỏi thường gặp
            </li>
            <li className=" mb-[10px] ps-[18px] relative">Sự kiện</li>
            <li className=" mb-[10px] ps-[18px] relative">Tin tức</li>
            <li className=" mb-[10px] ps-[18px] relative">Sao & Eva</li>
            <li className=" mb-[10px] ps-[18px] relative">Hệ thống Showroom</li>
            <li className=" mb-[10px] ps-[18px] relative">Tuyển dụng</li>
          </ul>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Chính sách bán hàng"className="ps-[35px] pr-[15px] py-[15px]  border-none  focus:border-none focus:outline-none">
      <ul className="mt-[20px] mb-5 text-sm footer-content block">
            <li className=" mb-[10px] ps-[18px] relative">
              Chính sách thanh toán
            </li>
            <li className=" mb-[10px] ps-[18px] relative">
              Chính sách vận chuyển
            </li>
            <li className=" mb-[10px] ps-[18px] relative">
              Chính sách đổi trả
            </li>
            <li className=" mb-[10px] ps-[18px] relative">
              Chính sách bảo mật
            </li>
            <li className=" mb-[10px] ps-[18px] relative">
              Chương trình thẻ VIP
            </li>
            <li className=" mb-[10px] ps-[18px] relative">
              Hướng dẫn chọn size
            </li>
          </ul>
      </AccordionItem>
    </Accordion>
   </div>
  );
}
