import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import Products from "./components/Products";

export default function App() {
  return (
    <main className="flex flex-col gap-y-6 w-full max-w-[1280px] mx-auto p-4">
      <h1 className="text-4xl font-bold">Desserts</h1>
      <div className="grid grid-cols-1 justify-center gap-10 md:grid-cols-[65%_1fr]">
        <CartProvider>
          <Products />
          <Cart />
        </CartProvider>
      </div>
    </main>
  );
}
