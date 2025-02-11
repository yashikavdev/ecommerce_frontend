"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SettingsSystemDaydreamSharp } from "@mui/icons-material";
import { fetchCart } from "@/utils/fetchCart";

export default function Navbar()
 {
  const [items, setItems] = useState<any[]>([]);
  const loadCart = async () => {
    const cartItems = await fetchCart();
    setItems(cartItems.cart); 
  };

  useEffect(() => {
    loadCart();
  });
  const totalItems = items.length;

  return (

    <nav className="p-1 text-white shadow-lg block w-full max-w-screen-lg px-4 py-1.5 mx-auto sticky top-3 lg:px-8 lg:py-2.5 backdrop-blur-lg backdrop-saturate-150 z-[9999] rounded-lg bg-opacity-40 bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/product-display"
          className="text-2xl font-bold tracking-wider hover:text-gray-300"
        >
          <span className="text-white">Shopping Cart</span>
        </Link>

        <div>
          <Link
            href="/cart"
            className="relative text-lg font-semibold hover:text-gray-300 flex items-center space-x-2"
          >
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="absolute flex items-center justify-center rounded-full -top-2 -right-2  bg-red-600 p-1 text-xs size-5">{totalItems}</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
