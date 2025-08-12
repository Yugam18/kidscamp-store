'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import NavBar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './page.module.scss';
import { Product, ProductsApiResponse } from '@/types/product';



export default function ProductListingPage() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);


    const fetchProducts = async () => {
        // Fetch products from your API
        try {
            const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const { products } = await res.json();
            console.log('Products from API:', products);
            setProducts(products);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    }

    useEffect(() => {


        fetchProducts();
    }, []);

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
                            rating={4} // You can add rating to your API data or calculate it
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}
