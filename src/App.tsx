import Cart from "./components/Cart";
import Products from "./components/Products";

export default function App() {
  return (
    <main className="grid grid-cols-1 justify-center gap-4 container mx-auto p-4 md:grid-cols-[65%_35%]">
      <Products />
      <Cart />
    </main>
  );
}
