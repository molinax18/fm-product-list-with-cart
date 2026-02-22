import { useCart } from "@/context/CartContext";
import { getQuantity } from "@/utils/cart";
import AddToCart from "./svg/AddToCart";
import Decrement from "./svg/Decrement";
import Increment from "./svg/Increment";

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
        className="cursor-pointer px-5 hover:text-red-500 group"
        aria-label="Remove one"
        onClick={() => {
          updateQuantity(id, quantity - 1);
        }}
      >
        <span className="border border-white rounded-full inline-flex items-center justify-center p-1.5 group-hover:bg-white transition-colors">
          <Decrement className="size-3" />
        </span>
      </button>
      <span>{quantity}</span>
      <button
        className="cursor-pointer px-5 hover:text-red-500 group"
        aria-label="Add one"
        onClick={() => {
          updateQuantity(id, quantity + 1);
        }}
      >
        <span className="border border-white rounded-full inline-flex items-center justify-center p-1.5 group-hover:bg-white transition-colors">
          <Increment className="size-3" />
        </span>
      </button>
    </div>
  );
}
