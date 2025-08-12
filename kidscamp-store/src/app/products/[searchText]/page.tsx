'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Header from '@/components/Header/Header';
import NavBar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from '../page.module.scss';
import { Product } from '@/types/product';

export default function ProductSearchResultsPage({
    params,
}: {
    params: Promise<{ searchText: string }>;
}) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState<string>('');

    useEffect(() => {
        let isMounted = true;
        (async () => {
            try {
                const { searchText } = await params;
                if (isMounted) {
                    setQuery(decodeURIComponent(searchText || '').trim());
                }
            } catch {
                if (isMounted) setQuery('');
            }
        })();
        return () => {
            isMounted = false;
        };
    }, [params]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const { products } = await res.json();
                setProducts(products);
            } catch (err) {
                console.error('Error fetching products:', err);
                setError('Failed to load products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = useMemo(() => {
        if (!query) return [];
        const lower = query.toLowerCase();
        return products.filter((p) => {
            const textMatch = [
                p.name,
                p.short_description,
                p.long_description,
                p.category_id,
                p.tag,
            ]
                .filter(Boolean)
                .some((field) => field.toLowerCase().includes(lower));

            const colorMatch = (p.color_variants || []).some((c) => c.toLowerCase().includes(lower));
            const sizeMatch = (p.size_variants || []).some((s) => s.toLowerCase().includes(lower));
            return textMatch || colorMatch || sizeMatch;
        });
    }, [products, query]);

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
                    <div className={styles.loading}>{error}</div>
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
                    <h1 className={styles.title}>Search results for: {query}</h1>
                    <p className={styles.subtitle}>
                        {filteredProducts.length} result{filteredProducts.length === 1 ? '' : 's'} found
                    </p>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className={styles.loading}>No products match your search.</div>
                ) : (
                    <div className={styles.productGrid}>
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} rating={4} />
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
}


