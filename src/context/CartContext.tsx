import { createContext, useContext, useState } from "react";
import type { CartContextType } from "../types/cartContext";
import type { ProductCartType } from "../types/product";
import products from "../data.json";

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ProductCartType[]>([]);
  const amount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  function addToCart(id: string) {
    const product = products.find((product) => product.id === id);
    //Corregir
    if (product) {
      setItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(id: string) {
    const product = products.find((product) => product.id === id);

    if (product) {
      setItems(items.filter((item) => item.id !== id));
    }
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{ amount, cartItems: items, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return cart;
}
