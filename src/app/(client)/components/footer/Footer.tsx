import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/src/app/css/footer.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import FooterItem from "./FooterItem";
const Footer = () => {
  return (
    <div className=" bg-black text-white">
      <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 px-[10px] md:px-[50px]   border-b-[1px] border-[#e5e5e569]">
        <div className=" pt-[50px] pr-[15px] pb-[20px] ps-[35px] xl:border-r-[1px] xl:border-[#e5e5e569]">
          <h3 className=" text-xl font-bold  py-3">Văn phòng</h3>
          <div className="mb-[15px]">
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
        </div>
        <div className=" hidden lg:block pt-[50px] pr-[15px] pb-[20px] ps-[35px]  xl:border-r-[1px] xl:border-[#e5e5e569]">
          <h2 className="text-xl font-bold py-3">Thông tin liên hệ</h2>
          <ul className=" mt-[10px] mb-5 text-sm footer-content">
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
        </div>
        <div className=" hidden lg:block pt-[50px] pr-[15px] pb-[20px] ps-[35px]  xl:border-r-[1px] xl:border-[#e5e5e569]">
          <h2 className="text-xl font-bold py-3 ">Chính sách bán hàng</h2>
          <ul className="mt-[10px] mb-5 text-sm footer-content">
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
        </div>
        <div className=" hidden lg:block pt-[50px] pr-[15px] pb-[20px] ps-[35px]  order-first lg:order-last">
          <h2 className="text-xl font-bold py-3">Đăng ký nhận tin</h2>
          <span className="text-sm pt-3 ">
            Để cập nhật những sản phẩm mới, nhận thông tin ưu đãi đặc biệt và
            thông tin giảm giá khác.
          </span>
          <div className=" relative mt-4">
            <MdOutlineMailOutline className=" absolute left-2 top-[9px] text-2xl text-[#d3d3d3]" />
            <input
              type="eamil"
              placeholder="Nhập email của bạn"
              className="footer-input rounded-md text-black focus:outline-none w-full"
            />
     <div className="absolute right-0 -top-[2px]">
     <button className="footer-button  bg-[#333333] px-[31px] py-[13px] text-[16px] font-bold rounded-md ">
            <span>  Đăng ký</span>
            </button>
     </div>
          </div>
          <div className=" mt-4">
            <ul className="footer-list-icon flex  gap-3 ">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <SiInstagram />
              </li>
              <li>
                <FaTiktok />
              </li>
              <li>
                <IoLogoYoutube />
              </li>
            </ul>
          </div>
          <div className=" mt-5 pb-[20px]">
            <Image
            width={170}
            height={76}
            src="/home/footer-img.webp"
            alt="footer-img"
            />
          </div>
        </div>
        <div className="block lg:hidden">
          <FooterItem/>
        </div>
      </div>
      <div className="py-[15px] text-sm text-center">
        Copyright © 2024 <Link href={"/"}> Eva De Eva.</Link>{" "}
        <span>Powered by Haravan</span>
      </div>
    </div>
  );
};

export default Footer;
