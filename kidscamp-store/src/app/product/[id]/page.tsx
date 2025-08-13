import React from 'react';
import Link from 'next/link';
import { Metadata, ResolvingMetadata } from 'next';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import NavBar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import ProductCorousel from '@/components/ProductCorousel/ProductCorousel';
import { Product } from '@/types/product';
import { getProductImages } from '@/utils/productUtils';
import productsData from '@/app/api/products.json';

// Helper function to get product by ID
async function getProductById(id: string): Promise<Product | null> {
    const product = productsData.products.find((p) => p.id === id);
    if (!product) return null;
    
    // Ensure the product matches the Product type by filtering out undefined values
    const cleanProduct: Product = {
        ...product,
        prices: Object.fromEntries(
            Object.entries(product.prices).filter(([_, colorPrices]) => colorPrices !== undefined)
        ) as Record<string, Record<string, number>>,
        discounted_prices: product.discounted_prices ? Object.fromEntries(
            Object.entries(product.discounted_prices).filter(([_, colorPrices]) => colorPrices !== undefined)
        ) as Record<string, Record<string, number>> : undefined
    };
    
    return cleanProduct;
}

// Metadata generation function
export async function generateMetadata(
    { params }: { params: Promise<{ id: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = await params;
    const product = await getProductById(id);
    const parentMetadata = await parent;

    if (!product) {
        return {
            title: 'Product Not Found',
            description: 'The requested product could not be found.',
        };
    }


    const firstImageUrl = product.imgUrl && product.imgUrl.length > 0 
        ? product.imgUrl[0] 
        : '/assets/images/logo.png';

    const lowestPrice = Math.min(
        ...Object.values(product.prices).flatMap(colorPrices => 
            Object.values(colorPrices)
        )
    );

    const baseMetadata: Metadata = {
        title: `${product.name} - KidsCamp Store`,
        description: `${product.short_description} Starting at $${lowestPrice}. ${product.materials_used}. Made in ${product.made_in}.`,
        alternates: {
            canonical: `/product/${id}`,
        },
        openGraph: {
            ...parentMetadata.openGraph,
            title: product.name,
            description: product.short_description,
            url: `/product/${id}`,
            images: [
                {
                    url: firstImageUrl,
                    width: 800,
                    height: 600,
                    alt: product.name,
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: product.name,
            description: product.short_description,
            images: [firstImageUrl],
        },
    };

    return baseMetadata;
}

// Server component for product detail page
export default async function ProductDetailPage({ 
    params 
}: { 
    params: Promise<{ id: string }> 
}) {
    const { id } = await params;
    const product = await getProductById(id);

    if (!product) {
        return (
            <>
                <Header />
                <NavBar />
                <div className={styles.productPage}>
                    <div className={styles.error}>
                        <h2>Product not found</h2>
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