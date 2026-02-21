import { formatDolarToUSD } from "@/utils/dolarFormat";
import { useCart } from "@/context/CartContext";
import { totalPrice } from "@/utils/cart";
import type { ProductCartType } from "@/types/product";
import RemoveItem from "./svg/RemoveItem";

export default function CartItem({ item }: { item: ProductCartType }) {
  const { removeFromCart } = useCart();

  return (
    <article className="p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold">{item.name}</h4>
          <div className="flex gap-x-3 text-sm">
            <span className="text-red font-bold">{item.quantity}x</span>
            <span className="text-rose-500">
              @{formatDolarToUSD(item.price).replace("$", "")}
            </span>
            <span className="text-rose-900 font-bold">
              {formatDolarToUSD(totalPrice(item))}
            </span>
          </div>
        </div>
        <button
          className="text-rose-500 p-1 border border-rose-300 rounded-full cursor-pointer hover:bg-rose-100 transition-colors duration-200"
          aria-label="Remove item"
          onClick={() => removeFromCart(item.id)}
        >
          <RemoveItem />
        </button>
      </div>
    </article>
  );
}
