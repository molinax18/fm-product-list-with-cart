import type { ProductCartType } from "@/types/product";
import { totalPrice } from "@/utils/cart";
import { formatDolarToUSD } from "@/utils/dolarFormat";

export default function OrderConfirmationItem({
  product,
}: {
  product: ProductCartType;
}) {
  return (
    <article className="flex items-center justify-between gap-x-6 p-2 rounded-lg shadow-sm">
      <div className="flex items-center gap-x-6">
        <img
          src={product.image.thumbnail}
          alt={product.name}
          className="w-16 rounded-md"
        />
        <div className="flex flex-col">
          <h4 className="font-semibold">{product.name}</h4>
          <div className="flex items-center gap-x-2">
            <span className="text-red font-bold">{product.quantity}x</span>
            <span className="text-rose-500">
              @{formatDolarToUSD(product.price).replace("$", "")}
            </span>
          </div>
        </div>
      </div>
      <span className="text-rose-900 font-bold">
        {formatDolarToUSD(totalPrice(product))}
      </span>
    </article>
  );
}
