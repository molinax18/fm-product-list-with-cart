import type { ProductCartType } from "./product";

export interface CartContextType {
  amount: number;
  cartItems: ProductCartType[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}
