import type { ProductCartType } from "@/types/product";
import { formatDolarToUSD } from "@/utils/dolarFormat";

export default function CartItem({ item }: { item: ProductCartType }) {
  const totalPrice = item.quantity * item.price;

  return (
    <article className="p-4 rounded-lg shadow-sm">
      <h4 className="font-semibold">{item.name}</h4>
      <div className="flex gap-x-3 text-sm">
        <span className="text-red font-bold">{item.quantity}x</span>
        <span className="text-rose-500">
          @{formatDolarToUSD(item.price).replace("$", "")}
        </span>
        <span className="text-rose-900 font-bold">
          {formatDolarToUSD(totalPrice)}
        </span>
      </div>
    </article>
  );
}
