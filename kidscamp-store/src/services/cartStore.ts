import { create } from "zustand";
import { CartItem, CartItemKey, CartState } from "@/types/product";

function getKey(item: CartItemKey): string {
    return `${item.productId}__${item.color}__${item.size}`;
}

function recalc(items: CartItem[]) {
    const itemCount = items.reduce((sum, it) => sum + it.quantity, 0);
    const subtotal = items.reduce((sum, it) => sum + it.unitPrice * it.quantity, 0);
    return { itemCount, subtotal };
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    isOpen: false,
    itemCount: 0,
    subtotal: 0,

    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
    toggle: () => set((s) => ({ isOpen: !s.isOpen })),

    addItem: (item) => {
        set((state) => {
            const index = state.items.findIndex(
                (it) => getKey(it) === getKey(item)
            );
            let newItems: CartItem[];
            if (index >= 0) {
                newItems = state.items.map((it, i) =>
                    i === index ? { ...it, quantity: it.quantity + item.quantity } : it
                );
            } else {
                newItems = [...state.items, item];
            }
            const { itemCount, subtotal } = recalc(newItems);
            return { items: newItems, itemCount, subtotal, isOpen: true };
        });
    },

    removeItem: (key) => {
        set((state) => {
            const newItems = state.items.filter((it) => getKey(it) !== getKey(key));
            const { itemCount, subtotal } = recalc(newItems);
            return { items: newItems, itemCount, subtotal };
        });
    },

    setQuantity: (key, quantity) => {
        set((state) => {
            const newItems = state.items
                .map((it) =>
                    getKey(it) === getKey(key) ? { ...it, quantity } : it
                )
                .filter((it) => it.quantity > 0);
            const { itemCount, subtotal } = recalc(newItems);
            return { items: newItems, itemCount, subtotal };
        });
    },

    increment: (key) => {
        const s = get();
        const item = s.items.find((it) => getKey(it) === getKey(key));
        if (!item) return;
        s.setQuantity(key, item.quantity + 1);
    },

    decrement: (key) => {
        const s = get();
        const item = s.items.find((it) => getKey(it) === getKey(key));
        if (!item) return;
        s.setQuantity(key, item.quantity - 1);
    },

    clear: () => set({ items: [], itemCount: 0, subtotal: 0 }),
}));


