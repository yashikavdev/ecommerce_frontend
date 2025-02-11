"use client";

import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import { Product } from "../../types/product";
import { fetchProducts } from "../../utils/fetchProducts";
import Navbar from "@/components/Navbar";
import ProductTable from "@/components/Table";

export default function ProductDisplayPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    getProducts();
  }, []);


  if (!products.length) {
    return <Loading />;
  }

  return (
    <>
      {showNav && <Navbar/>}
      <ProductTable products={products} />
    </>
  );
}
