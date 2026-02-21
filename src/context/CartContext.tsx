import { createContext, useContext, useState } from "react";
import type { CartContextType } from "@/types/cartContext";
import type { ProductCartType } from "@/types/product";
import products from "@/data.json";

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ProductCartType[]>([]);

  function addToCart(id: string) {
    const product = products.find((product) => product.id === id);

    if (product) {
      setItems((prevItems) => {
        const itemExists = prevItems.find((item) => item.id === id);

        if (itemExists) {
          return prevItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          );
        }
        return [...prevItems, { ...product, quantity: 1 }];
      });
    }
  }

  function removeFromCart(id: string) {
    const product = products.find((product) => product.id === id);

    if (product) {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }
  }

  function clearCart() {
    setItems([]);
  }

  function updateQuantity(id: string, quantity: number) {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: items,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
      }}
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
