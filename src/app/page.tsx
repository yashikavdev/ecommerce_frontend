"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import LandingPage from '@/components/LandingPage'


export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/product-display"); 
  }, [router]);
  return (
    <div className="text-center ">
      {/* <LandingPage/> */}
    </div>
  )
}
