import Product from "./Product";
import products from "@/data.json";

export default function Products() {
  return (
    <section className="flex flex-col gap-y-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
