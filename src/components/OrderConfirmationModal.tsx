import { createPortal } from "react-dom";
import { useCart } from "@/context/CartContext";
import { formatDolarToUSD } from "@/utils/dolarFormat";
import OrderConfirmationItem from "./OrderConfirmationItem";
import OrderConfirmer from "./svg/OrderConfirmer";

export default function OrderConfirmationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { cartItems, clearCart } = useCart();
  const orderTotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 grid place-items-center justify-center z-50 bg-black/50">
      <section className="flex flex-col gap-y-8 p-6 rounded-lg shadow-sm bg-white max-h-fit w-[600px]">
        <header className="space-y-2">
          <OrderConfirmer />
          <h2 className="text-3xl font-bold">Order confirmation</h2>
          <p className="text-rose-400">We hope you enjoyed your food!</p>
        </header>
        <ul className="flex flex-col gap-y-4">
          {cartItems.map((item) => (
            <li key={item.id}>
              <OrderConfirmationItem product={item} />
            </li>
          ))}
        </ul>
        <article className="self-start flex items-center gap-x-6 py-3 px-6 shadow-sm rounded-full md:self-stretch md:justify-center">
          <p>Order total</p>
          <strong className="text-2xl">{formatDolarToUSD(orderTotal)}</strong>
        </article>
        <button
          className="bg-red py-4 text-rose-50 rounded-full font-medium cursor-pointer"
          onClick={() => {
            clearCart();
            onClose();
          }}
        >
          Start New Order
        </button>
      </section>
    </div>,
    document.body,
  );
}
