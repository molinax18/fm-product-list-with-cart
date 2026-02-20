import type { ProductCartType } from "@/types/product";

export function getQuantity(id: string, cartItems: ProductCartType[]) {
  return cartItems.find((item) => item.id === id)?.quantity;
}

export function orderTotal(cartItems: ProductCartType[]) {
  return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
}

export function totalPrice(cartItem: ProductCartType) {
  return cartItem.quantity * cartItem.price;
}
