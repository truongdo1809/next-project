"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  FaBook,
  FaDesktop,
  FaShoppingCart,
  FaUser,
  FaTags,
  FaCubes,
  FaCube,
  FaRegDotCircle,
  FaChartLine,
  FaQuestionCircle,
} from "react-icons/fa";
import "@/src/app/css/navbar-user.css";

const NavbarUser = () => {
  const [visibleMenus, setVisibleMenus] = useState(Array(8).fill(false));

  const toggleVisibility = (index: any) => {
    const updatedMenus = visibleMenus.map((menu, i) =>
      i === index ? !menu : false
    );
    setVisibleMenus(updatedMenus);
  };
  return (
    <>
      <div className="page-user flex justify-center text-xl">
        <div className="user-navbar bg-[#2a2a2a] text-[#bdbdbd] px-[10px]">
          <div className="gap-[10px] flex-col flex">
            <div className="mobile-search">
              <form className="mobile-search-form">
                <input
                  className="mobile-input-search"
                  type="text"
                  placeholder="Tìm kiếm..."
                />
                <button className="search-btn p-1" type="submit">
                  <CiSearch />
                </button>
              </form>
            </div>
            <div className="menu-hover">
              <Link
                href={"/user"}
                className="flex gap-[10px] items-center px-[5px] py-[10px]"
              >
                <FaDesktop /> Dashboard
              </Link>
            </div>
            <div>
              <div
                className="flex menu-hover gap-[10px] items-center cursor-pointer px-[5px] py-[10px]"
                onClick={() => toggleVisibility(0)}
              >
                <FaBook /> Catalog
              </div>
              <ul
                className={`products-menu ${visibleMenus[0] ? "active" : ""}`}
              >
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={"/user/products"}
                  >
                    <FaRegDotCircle /> Products
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Categories
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Manufacturers
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Product reviews
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div
                className="flex menu-hover gap-[10px] items-center cursor-pointer px-[5px] py-[10px]"
                onClick={() => toggleVisibility(1)}
              >
                <FaShoppingCart /> Sales
              </div>
              <ul
                className={`products-menu ${visibleMenus[1] ? "active" : ""}`}
              >
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={"/"}
                  >
                    <FaRegDotCircle /> Orders
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Shipments
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Return requests
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Recurring payments
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Gift cards
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Shopping carts and wishlists
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div
                className="flex menu-hover gap-[10px] items-center cursor-pointer px-[5px] py-[10px]"
                onClick={() => toggleVisibility(2)}
              >
                <FaUser /> Customers
              </div>
              <ul
                className={`products-menu ${visibleMenus[2] ? "active" : ""}`}
              >
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={"/"}
                  >
                    <FaRegDotCircle /> Customers
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Customer roles
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Online customers
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Vendors
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Activity log
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> GDPR requests (log)
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div
                className="flex menu-hover gap-[10px] items-center cursor-pointer px-[5px] py-[10px]"
                onClick={() => toggleVisibility(3)}
              >
                <FaTags /> Promotions
              </div>
              <ul
                className={`products-menu ${visibleMenus[3] ? "active" : ""}`}
              >
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={"/"}
                  >
                    <FaRegDotCircle /> Discounts
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Affiliates
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Newsletter subscribers
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Campaigns
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div
                className="flex menu-hover gap-[10px] items-center cursor-pointer px-[5px] py-[10px]"
                onClick={() => toggleVisibility(4)}
              >
                <FaCubes /> Content management
              </div>
              <ul
                className={`products-menu ${visibleMenus[4] ? "active" : ""}`}
              >
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={"/"}
                  >
                    <FaRegDotCircle /> Topics (pages)
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Message templates
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> News items
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> News comments
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Blog posts
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Blog comments
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Polls
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Forums
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div
                className="flex menu-hover gap-[10px] items-center cursor-pointer px-[5px] py-[10px]"
                onClick={() => toggleVisibility(5)}
              >
                <FaCube /> System
              </div>
              <ul
                className={`products-menu ${visibleMenus[5] ? "active" : ""}`}
              >
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={"/"}
                  >
                    <FaRegDotCircle /> System information
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Log
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Warnings
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Message queue
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Schedule tasks
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Search engine friendly page names
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Templates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div
                className="flex menu-hover gap-[10px] items-center cursor-pointer px-[5px] py-[10px]"
                onClick={() => toggleVisibility(6)}
              >
                <FaChartLine /> Reports
              </div>
              <ul
                className={`products-menu ${visibleMenus[6] ? "active" : ""}`}
              >
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={"/"}
                  >
                    <FaRegDotCircle /> Sales summary
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Low stock
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Bestsellers
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Products never purchased
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Country sales
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div
                className="flex menu-hover gap-[10px] items-center cursor-pointer px-[5px] py-[10px]"
                onClick={() => toggleVisibility(7)}
              >
                <FaQuestionCircle /> Help
              </div>
              <ul
                className={`products-menu ${visibleMenus[7] ? "active" : ""}`}
              >
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={"/"}
                  >
                    <FaRegDotCircle /> Training
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Bestsellers
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Community forums
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Premium support services
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex menu-hover items-center gap-[10px] py-[10px] px-[5px]"
                    href={""}
                  >
                    <FaRegDotCircle /> Solution partners
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarUser;
