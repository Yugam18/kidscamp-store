'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import NavBar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import ProductCorousel from '@/components/ProductCorousel/ProductCorousel';
import { Product } from '@/types/product';
import { getProductImages } from '@/utils/productUtils';

// Fetcher function for SWR
const fetcher = async (url: string): Promise<Product> => {
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(`Failed to fetch product: ${response.statusText}`);
    }
    
    return response.json();
};

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const [productId, setProductId] = useState<string | null>(null);

    useEffect(() => {
        const extractId = async () => {
            const awaitedParams = await params;
            setProductId(awaitedParams.id);
        };
        extractId();
    }, [params]);

    
    const { data: product, error, isLoading } = useSWR(
        productId ? `/api/product/${productId}` : null,
        fetcher,
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: true,
            errorRetryCount: 3,
            errorRetryInterval: 1000,
            dedupingInterval: 60000, // Dedupe requests within 1 minute
            focusThrottleInterval: 5000, // Throttle focus revalidation
        }
    );

    if (!productId || isLoading) {
        return (
            <>
                <Header />
                <NavBar />
                <div className={styles.productPage}>
                    <div className={styles.loading}>Loading product...</div>
                </div>
                <Footer />
            </>
        );
    }

    if (error || !product) {
        const errorMessage = error?.message || 'Product not found';
        return (
            <>
                <Header />
                <NavBar />
                <div className={styles.productPage}>
                    <div className={styles.error}>
                        <h2>{errorMessage}</h2>
                        <Link href="/products" className={styles.backLink}>
                            ← Back to Products
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    const productImages = getProductImages(product, 4);

    return (
        <>
            <Header />
            <NavBar />
            <div className={styles.productPage}>
                <div className={styles.breadcrumb}>
                    <Link href="/products">Products</Link>
                    <span className={styles.separator}>›</span>
                    <span>{product.name}</span>
                </div>

                <div className={styles.productContent}>
                    <ProductCorousel images={productImages} alt={product.name} />
                    <ProductDetails product={product} />
                </div>
            </div>
            <Footer />
        </>
    );
}