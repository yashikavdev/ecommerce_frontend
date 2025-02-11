export const addToCartAPI = async (product: any) => {

  const response = await fetch("http://localhost:3000/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product_id: product }), // Extracting product ID
  });

  if (!response.ok) {
    throw new Error("Failed to add product to cart");
  }

  return response.json();
};
