'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button, Divider } from '@mui/material';
import { fetchCart } from '@/utils/fetchCart';
import { removeFromCartAPI } from '@/utils/removeToCart';

export default function CartPage() {
  const [items, setItems] = useState<any[]>([]);
  const [cartPrice, setCartPrice] = useState(0);

  const loadCart = async () => {
    const cartItems = await fetchCart();
    setItems(cartItems.cart); 
  };

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
    setCartPrice(totalPrice);
  }, [items]); 
  const totalItems = items.length;

  const handleRemove = async (id: string) => {
    await removeFromCartAPI(id);
    loadCart(); 
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <div className="border border-gray-200 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-5">Your Cart</h2>

          {items.length === 0 ? (
            <div className="min-h-36 flex items-center justify-center p-6 border-t">
              <p className="text-base font-medium">Your cart is empty.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex flex-col lg:flex-row justify-between items-center p-4 border-black/10 border bg-gray-50 rounded-lg shadow-sm hover:shadow-md">
                  <div className="flex flex-col items-center space-x-4 md:flex-row">
                    <h3 className="text-base font-semibold">{item.name}</h3>
                  </div>
                  <div className="flex flex-col items-center space-x-5 md:flex-row font-semibold text-sm">
                    <span>{`$${item.price.toFixed(2)}`}</span>
                    <Button
                      variant="outlined"
                      onClick={() => handleRemove(item.id)}
                      className="bg-red-500 !border-red-500 text-white !text-sm !font-semibold !rounded-md !capitalize !py-2.5"
                    >
                      Remove
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <Divider />

          <div className="mt-8 p-6 border border-gray-300 bg-gray-50 rounded-lg">
            <div className="flex flex-col items-end justify-end gap-4">
              <p className="font-semibold w-full text-end">
                <span>Total Items:</span>
                <span className="inline-block min-w-24 font-normal">{totalItems}</span>
              </p>
              <p className="font-semibold w-full text-end">
                <span>Total Price:</span>
                <span className="inline-block min-w-24 font-normal">{`$${cartPrice.toFixed(2)}`}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
