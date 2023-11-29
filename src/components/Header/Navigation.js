"use client";

import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navigation = () => {
  const cartAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="w-full bg-gray-800 text-white h-20 flex items-center justify-between">
      <div className="">
        <Link href="/">
          <img
            className="cursor-pointer ml-6 w-[130px] h-[50px]"
            src="./img/nav-logo.png"
            alt="logo"
          ></img>
        </Link>
      </div>

      <div className="pr-6 cursor-pointer">
        <div className="w-[40%] pl-4 flex items-center justify-between">
          <div className="text-white flex justify center items-center space-x-6">
            <Link href="/">
              <h3 className="cursor-pointer hover:border-b-2 hover:border-white">
                Home
              </h3>
            </Link>
            <Link href="/products">
              <h3 className="cursor-pointer hover:border-b-2 hover:border-white">
                Products
              </h3>
            </Link>
            <Link href="/contact">
              <h3 className="cursor-pointer hover:border-b-2 hover:border-white pr-4">
                Contact
              </h3>
            </Link>
          </div>

          <Link href="/cart">
            <Badge badgeContent={cartAmount} color="secondary">
              <ShoppingCart />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
