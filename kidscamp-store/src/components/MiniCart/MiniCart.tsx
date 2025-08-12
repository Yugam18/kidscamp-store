"use client";
import React from "react";
import styles from "./MiniCart.module.scss";
import Image from "next/image";
import { useCartStore } from "@/services/cartStore";

const MiniCart: React.FC = () => {
    const items = useCartStore((s) => s.items);
    const subtotal = useCartStore((s) => s.subtotal);
    const isOpen = useCartStore((s) => s.isOpen);
    const close = useCartStore((s) => s.close);
    const increment = useCartStore((s) => s.increment);
    const decrement = useCartStore((s) => s.decrement);
    const removeItem = useCartStore((s) => s.removeItem);

    return (
        <div className={`${styles.overlay} ${isOpen ? styles.show : ""}`} onClick={close}>
            <aside className={styles.drawer} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <div className={styles.title}>My Bag</div>
                    <button className={styles.closeBtn} onClick={close} aria-label="Close">×</button>
                </div>
                <div className={styles.freeBanner}>Free delivery from $150</div>
                <div className={styles.items}>
                    {items.length === 0 ? (
                        <div className={styles.empty}>Your cart is empty</div>
                    ) : (
                        items.map((it) => (
                            <div className={styles.item} key={`${it.productId}-${it.color}-${it.size}`}>
                                {it.imageUrl && (
                                    <Image src={it.imageUrl} alt={it.name} width={72} height={72} className={styles.img} />
                                )}
                                <div className={styles.meta}>
                                    <div className={styles.name}>{it.name}</div>
                                    <div className={styles.variant}>{it.color} · {it.size}</div>
                                    <div className={styles.row}>
                                        <div className={styles.qty}>
                                            <button onClick={() => decrement({ productId: it.productId, color: it.color, size: it.size })} className={styles.qtyBtn} aria-label="Decrease">−</button>
                                            <div className={styles.qtyVal}>{it.quantity}</div>
                                            <button onClick={() => increment({ productId: it.productId, color: it.color, size: it.size })} className={styles.qtyBtn} aria-label="Increase">+</button>
                                        </div>
                                        <div className={styles.price}>${(it.unitPrice * it.quantity).toFixed(2)}</div>
                                        <button className={styles.remove} onClick={() => removeItem({ productId: it.productId, color: it.color, size: it.size })}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className={styles.footer}>
                    <div className={styles.totalRow}>
                        <span>Total</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <button className={styles.secondary} onClick={close}>Continue shopping</button>
                    <button className={styles.primary}>Go to checkout →</button>
                </div>
            </aside>
        </div>
    );
};

export default MiniCart;


