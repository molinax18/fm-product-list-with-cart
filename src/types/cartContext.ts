import type { ProductCartType } from "./product";

export interface CartContextType {
  cartItems: ProductCartType[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  updateQuantity: (id: string, quantity: number) => void;
}
