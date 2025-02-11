export const fetchCart = async () => {
  try {
    const response = await fetch('http://localhost:3000/cart');

    if (!response.ok) {
      throw new Error('Failed to fetch Cart products');
    }

    const data = await response.json(); 

    return data; 
  } catch (error) {
    throw error;
  }
};
