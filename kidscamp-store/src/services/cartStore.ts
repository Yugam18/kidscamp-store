import { create } from "zustand";
import { CartItem, CartItemKey, CartState } from "@/types/product";

// Helper to generate a unique key for a cart item
const getCartItemKey = ({ productId, color, size }: CartItemKey): string =>
    `${productId}__${color}__${size}`;

// Helper to recalculate cart totals
const calculateCartTotals = (items: CartItem[]) => {
    const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalSubtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    return { itemCount: totalItemCount, subtotal: totalSubtotal };
};

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    isOpen: false,
    itemCount: 0,
    subtotal: 0,

    open: () => set({ isOpen: true }),

    close: () => set({ isOpen: false }),

    toggle: () => set((state) => ({ isOpen: !state.isOpen })),

    addItem: (item) => {
        const { items } = get();
        const existingIndex = items.findIndex(
            (cartItem) => getCartItemKey(cartItem) === getCartItemKey(item)
        );

        const updatedItems = existingIndex === -1
            ? [...items, item]
            : items.map((cartItem, index) =>
                index === existingIndex
                    ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                    : cartItem
            );

        const { itemCount, subtotal } = calculateCartTotals(updatedItems);
        set({ items: updatedItems, itemCount, subtotal, isOpen: true });
    },

    removeItem: (key) => {
        const { items } = get();
        const updatedItems = items.filter((cartItem) => getCartItemKey(cartItem) !== getCartItemKey(key));
        const { itemCount, subtotal } = calculateCartTotals(updatedItems);
        set({ items: updatedItems, itemCount, subtotal });
    },

    setQuantity: (key, quantity) => {
        const { items } = get();
        const updatedItems = items
            .map((cartItem) =>
                getCartItemKey(cartItem) === getCartItemKey(key)
                    ? { ...cartItem, quantity }
                    : cartItem
            )
            .filter((cartItem) => cartItem.quantity > 0);

        const { itemCount, subtotal } = calculateCartTotals(updatedItems);
        set({ items: updatedItems, itemCount, subtotal });
    },

    increment: (key) => {
        const { items } = get();
        const updatedItems = items.map((cartItem) =>
            getCartItemKey(cartItem) === getCartItemKey(key)
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );

        const { itemCount, subtotal } = calculateCartTotals(updatedItems);
        set({ items: updatedItems, itemCount, subtotal });
    },

    decrement: (key) => {
        const { items } = get();
        const updatedItems = items
            .map((cartItem) =>
                getCartItemKey(cartItem) === getCartItemKey(key)
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            )
            .filter((cartItem) => cartItem.quantity > 0);

        const { itemCount, subtotal } = calculateCartTotals(updatedItems);
        set({ items: updatedItems, itemCount, subtotal });
    },

    clear: () => set({ items: [], itemCount: 0, subtotal: 0 }),
}));
