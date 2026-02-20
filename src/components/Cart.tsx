import { useCart } from "@/context/CartContext";
import { formatDolarToUSD } from "@/utils/dolarFormat";
import { useModal } from "@/hooks/useModal";
import CartItem from "./CartItem";
import OrderConfirmationModal from "./OrderConfirmationModal";
import { orderTotal } from "@/utils/cart";

export default function Cart() {
  const { cartItems } = useCart();
  const { isOpen, openModal, closeModal } = useModal();
  const amount = cartItems.length;

  if (cartItems.length === 0) {
    return (
      <section className="flex flex-col gap-y-6 py-6 px-8 rounded-lg shadow-lg bg-white max-h-fit">
        <h2 className="text-3xl font-bold text-red">Your cart ({amount})</h2>

        <div>
          <img
            src="/images/illustration-empty-cart.svg"
            alt="Empty cart"
            className="size-72 mx-auto"
          />
          <p className="font-semibold text-center text-rose-400">
            Your added items will appear here
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="flex flex-col gap-y-6 py-6 px-8 rounded-lg shadow-lg bg-white max-h-fit">
        <h2 className="text-3xl font-bold text-red">Your cart ({amount})</h2>
        <ul className="flex flex-col gap-y-4">
          {cartItems.map((item) => (
            <li key={item.id}>
              <CartItem item={item} />
            </li>
          ))}
        </ul>
        <article className="self-start flex items-center gap-x-6 py-3 px-6 shadow-sm rounded-full md:self-stretch md:justify-center">
          <p>Order total</p>
          <strong className="text-2xl">
            {formatDolarToUSD(orderTotal(cartItems))}
          </strong>
        </article>

        <article className="flex items-center gap-x-3 p-4 bg-amber-50 rounded-full">
          <img src="/images/icon-carbon-neutral.svg" alt="Carbon neutral" />
          <p>
            This is an <b>carbon-neutral</b> delivery
          </p>
        </article>

        <button
          className="bg-red py-4 text-rose-50 rounded-full font-medium cursor-pointer"
          onClick={openModal}
        >
          Confirm Order
        </button>
      </section>
      {isOpen && (
        <OrderConfirmationModal isOpen={isOpen} onClose={closeModal} />
      )}
    </>
  );
}
