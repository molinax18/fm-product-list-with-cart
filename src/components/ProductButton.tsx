import { useCart } from "@/context/CartContext";
import { getQuantity } from "@/utils/cart";
import AddToCart from "./svg/AddToCart";

interface ProductButtonProps {
  id: string;
  className?: string;
}

export default function ProductButton({ id, className }: ProductButtonProps) {
  const { addToCart, updateQuantity, cartItems } = useCart();
  const quantity = getQuantity(id, cartItems);

  if (!quantity) {
    return (
      <button
        className={`${className} bg-white border border-red cursor-pointer`}
        onClick={() => {
          addToCart(id);
        }}
      >
        <AddToCart />
        Add to Cart
      </button>
    );
  }

  return (
    <div className={`${className} bg-red text-white cursor-pointer`}>
      <button
        className="cursor-pointer px-5"
        aria-label="Remove one"
        onClick={() => {
          updateQuantity(id, quantity - 1);
        }}
      >
        <span className="rounded-full border border-white px-1.5">-</span>
      </button>
      <span>{quantity}</span>
      <button
        className="cursor-pointer px-5"
        aria-label="Add one"
        onClick={() => {
          updateQuantity(id, quantity + 1);
        }}
      >
        <span className="rounded-full border border-white px-1.5">+</span>
      </button>
    </div>
  );
}
