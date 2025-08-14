'use client';
import React from 'react';
import Header from '@/components/Header/Header';
import NavBar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './page.module.scss';
import { useProducts } from '@/hooks/useProducts';



export default function ProductListingPage() {

    const { products, loading, error } = useProducts();

    if (loading) {
        return (
            <>
                <Header />
                <NavBar />
                <div className={styles.container}>
                    <div className={styles.loading}>Loading products...</div>
                </div>
                <Footer />
            </>
        );
    }

    if (error) {
        return (
            <>
                <Header />
                <NavBar />
                <div className={styles.container}>
                    <div className={styles.loading}>Error loading products: {error.message}</div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <NavBar />

            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Kids Clothing</h1>
                    <p className={styles.subtitle}>Discover our complete collection of kids&apos; fashion</p>
                </div>

                <div className={styles.productGrid}>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            rating={4}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}
