export const removeFromCartAPI = async (productId: string) => {
  try {
    const response = await fetch(`http://localhost:3000/cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_id: productId }), 
    });


    if (!response.ok) {
      throw new Error("Failed to remove product from cart");
    }

    const data = await response.json(); 

    return data; 
  } catch (error) {
    throw error;
  }
};
