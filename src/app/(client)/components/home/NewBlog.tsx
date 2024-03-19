"use client";
import Image from "next/image";
import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const NewBlog = () => {
  return (
    <div className=" px-[50px] pb-[50px] cursor-pointer">
      <div>
        <h1 className=" text-3xl font-medium mb-">Bài viết mới nhất</h1></div>
      <Swiper
       
        spaceBetween={30}
        navigation={true}
        autoplay={{
          delay: 4000,
        }}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          1280: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 3,
          },
        640: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          {" "}
          <div>
            <div className="blog-img overflow-hidden">
              <Image
                width={500}
                height={500}
                src="/home/NewBlog.img-1.webp"
                alt=""
                className=" object-cover blog-img-item"
              />
            </div>
            <div className=" px-[17px] py-[10px] blog-info">
              <h1 className=" text-base font-medium hover:text-[#666]">
                WILD SOUL - BST CHẠM ĐẾN VẺ ĐẸP CỦA TÂM HỒN TỰ DO
              </h1>
              <span className="block text-[13px] text-[#666666] font-medium  h-11 leading-6 line-clamp-2  overflow-hidden content-blog  ">
                Được khơi nguồn cảm hứng từ vẻ đẹp giản dị của một tâm hồn tự
                do, Eva de Eva cho ra mắt bộ sưu tập
              </span>
              <div className=" flex items-center justify-between  pt-4">
                <span className=" text-sm text-[#666]">02 Tháng 08, 2023</span>
                <span className="flex items-center  text-sm text-[#666]">
                  Xem thêm <HiOutlineChevronRight className="mt-1" />{" "}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <div className="blog-img overflow-hidden">
              <Image
                width={500}
                height={500}
                src="/home/NewBlog.img-2.webp"
                alt=""
                className=" object-cover blog-img-item"
              />
            </div>
            <div className=" px-[17px] py-[10px] blog-info">
              <h1 className=" text-base font-medium ">
                CHARME RETRO – CẢM HỨNG THANH LỊCH ĐẸP BỀN VỮNG VỚI THỜI GIAN
              </h1>
              <span className="block text-[13px] text-[#666666] font-medium  h-11 leading-6 line-clamp-2  overflow-hidden content-blog  ">
                Tái hiện lại vẻ đẹp mang hơi thở của năm tháng thanh xuân trẻ
                trung, sôi nổi, nhiệt huyết qua bối cảnh không gian đậm...
              </span>
              <div className=" flex items-center justify-between  pt-4">
                <span className=" text-sm text-[#666]">02 Tháng 08, 2023</span>
                <span className="flex items-center  text-sm text-[#666]">
                  Xem thêm <HiOutlineChevronRight className="mt-1" />{" "}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <div className="blog-img overflow-hidden">
              <Image
                width={500}
                height={500}
                src="/home/NewBlog.img-3.webp"
                alt=""
                className=" object-cover blog-img-item"
              />
            </div>
            <div className=" px-[17px] py-[10px] blog-info">
              <h1 className=" text-base font-medium ">GLAM | NEW COLLETION</h1>
              <span className="block text-[13px] text-[#666666] font-medium  h-11 leading-6 line-clamp-2  overflow-hidden content-blog  ">
                Tự hào khi viết tiếp câu chuyện về người phụ nữ hiện đại, sẵn
                sàng bước qua những giới hạn và định kiến để xuất...
              </span>
              <div className=" flex items-center justify-between  pt-4">
                <span className=" text-sm text-[#666]">02 Tháng 08, 2023</span>
                <span className="flex items-center  text-sm text-[#666]">
                  Xem thêm <HiOutlineChevronRight className="mt-1" />{" "}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <div className="blog-img overflow-hidden">
              <Image
                width={500}
                height={500}
                src="/home/NewBlog.img-4.webp"
                alt=""
                className=" object-cover blog-img-item"
              />
            </div>
            <div className=" px-[17px] py-[10px] blog-info">
              <h1 className=" text-base font-medium ">
                BEYOND CONVENTIONS | NEW ARRIVAL
              </h1>
              <span className="block text-[13px] text-[#666666] font-medium  h-11 leading-6 line-clamp-2  overflow-hidden content-blog">
                𝐁𝐄𝐘𝐎𝐍𝐃 𝐂𝐎𝐍𝐕𝐄𝐍𝐓𝐈𝐎𝐍𝐒 | 𝐍𝐄𝐖 𝐀𝐑𝐑𝐈𝐕𝐀𝐋Đánh dấu bước chuyển mình ấn
                tượng đối lập với vẻ nữ tính mềm mại quen thuộc, quý cô Eva
                tự...
              </span>
              <div className=" flex items-center justify-between  pt-4">
                <span className=" text-sm text-[#666]">02 Tháng 08, 2023</span>
                <span className="flex items-center  text-sm text-[#666]">
                  Xem thêm <HiOutlineChevronRight className="mt-1" />{" "}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <div className="blog-img overflow-hidden">
              <Image
                width={500}
                height={500}
                src="/home/NewBlog.img-5.webp"
                alt=""
                className=" object-cover blog-img-item"
              />
            </div>
            <div className=" px-[17px] py-[10px] blog-info">
              <h1 className=" text-base font-medium ">
                [NEW ARRIVALS] Trẻ Trung và Thời Thượng
              </h1>
              <span className="block text-[13px] text-[#666666] font-medium  h-11 leading-6 line-clamp-2  overflow-hidden content-blog  ">
                𝐍𝐄𝐖 𝐀𝐑𝐑𝐈𝐕𝐀𝐋𝐒“Em có thấy trời tháng Ba trong xanh,Xa chân trời
                đôi ba chòm mây trắng.Rong ruổi dạo chơi chuyện trò trong
                nắng,Nắng nhẹ nhàng,...
              </span>
              <div className=" flex items-center justify-between  pt-4">
                <span className=" text-sm text-[#666]">02 Tháng 08, 2023</span>
                <span className="flex items-center  text-sm text-[#666]">
                  Xem thêm <HiOutlineChevronRight className="mt-1" />{" "}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <div className="blog-img overflow-hidden">
              <Image
                width={500}
                height={500}
                src="/home/NewBlog.img-6.webp"
                alt=""
                className=" object-cover blog-img-item"
              />
            </div>
            <div className=" px-[17px] py-[10px] blog-info">
              <h1 className=" text-base font-medium ">
                Chạm vào ký ức | Return to Oasis The collection by Eva de Eva
              </h1>
              <span className="block text-[13px] text-[#666666] font-medium  h-11 leading-6 line-clamp-2  overflow-hidden content-blog ">
                𝐂𝐡𝐚̣𝐦 𝐯𝐚̀𝐨 𝐤𝐲́ 𝐮̛́𝐜 | 𝐑𝐞𝐭𝐮𝐫𝐧 𝐭𝐨 𝐎𝐚𝐬𝐢𝐬 𝐓𝐡𝐞 𝐜𝐨𝐥𝐥𝐞𝐜𝐭𝐢𝐨𝐧 𝐛𝐲 𝐄𝐯𝐚 𝐝𝐞 𝐄𝐯𝐚
                CHÚNG TA THƯỜNG TÌM VỀ KÝ ỨC KHI NÀO?Là khi chớm lạnh lúc...
              </span>
              <div className=" flex items-center justify-between  pt-4">
                <span className=" text-sm text-[#666]">02 Tháng 08, 2023</span>
                <span className="flex items-center  text-sm text-[#666]">
                  Xem thêm <HiOutlineChevronRight className="mt-1" />{" "}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewBlog;
