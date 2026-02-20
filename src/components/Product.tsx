import { useCart } from "@/context/CartContext";
import type { ProductType } from "@/types/product";
import { formatDolarToUSD } from "@/utils/dolarFormat";
import AddToCart from "./svg/AddToCart";

export default function Product({ product }: { product: ProductType }) {
  const { addToCart } = useCart();
  return (
    <article className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden max-w-96">
      <picture>
        <source media="(min-width:650px)" srcSet={product.image.desktop} />
        <source media="(min-width:465px)" srcSet={product.image.tablet} />
        <img
          src={product.image.mobile}
          alt={product.name}
          className="rounded-lg object-contain"
        />
      </picture>
      <button
        className="self-center inline-flex items-center gap-x-2 -mt-5 py-1 px-3 rounded-full bg-white border border-red cursor-pointer"
        onClick={() => addToCart(product.id)}
      >
        <AddToCart />
        Add to Cart
      </button>
      <section className="flex flex-col p-4">
        <p className="text-rose-300 text-sm">{product.category}</p>
        <h3 className="font-semibold">{product.name}</h3>
        <p className="font-semibold text-red">
          {formatDolarToUSD(product.price)}
        </p>
      </section>
    </article>
  );
}
