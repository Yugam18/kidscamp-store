'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import NavBar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import ProductCorousel from '@/components/ProductCorousel/ProductCorousel';
import { Product, ProductsApiResponse } from '@/types/product';
import { getProductImages } from '@/utils/productUtils';
import rawProductsJson from '@/app/api/products.json';

// Sample API data - the same data as in PLP for consistency
// const sampleApiData: ProductsApiResponse = {
//     "products": [
//         {
//             "id": "floral-party-dress",
//             "category_id": "little-royals",
//             "name": "Floral Party Dress",
//             "short_description": "Elegant floral print dress for special occasions.",
//             "long_description": "Charming floral dress with satin finish and ribbon accents.",
//             "color_variants": [
//                 "Floral Pink",
//                 "Ivory Floral"
//             ],
//             "size_variants": [
//                 "2-3 yrs",
//                 "4-5 yrs"
//             ],
//             "prices": {
//                 "Floral Pink": {
//                     "2-3 yrs": 75,
//                     "4-5 yrs": 80
//                 },
//                 "Ivory Floral": {
//                     "2-3 yrs": 75,
//                     "4-5 yrs": 80
//                 }
//             },
//             "midjourney_prompt": "child elegantly dressed in floral print satin dress, festive atmosphere.",
//             "tag": "popular",
//             "made_in": "Italy",
//             "materials_used": "Satin, Cotton lining, Ribbon"
//         },
//         {
//             "id": "denim-overalls",
//             "category_id": "everyday-luxe",
//             "name": "Denim Overalls",
//             "short_description": "Classic denim overalls perfect for everyday wear.",
//             "long_description": "Comfortable denim overalls with adjustable straps and pockets.",
//             "color_variants": [
//                 "Classic Blue"
//             ],
//             "size_variants": [
//                 "3-4 yrs",
//                 "5-6 yrs"
//             ],
//             "prices": {
//                 "Classic Blue": {
//                     "3-4 yrs": 50,
//                     "5-6 yrs": 55
//                 }
//             },
//             "midjourney_prompt": "playful child wearing denim overalls, casual and playful environment.",
//             "tag": "essential",
//             "made_in": "USA",
//             "materials_used": "100% Cotton Denim"
//         },
//         {
//             "id": "plush-bathrobe",
//             "category_id": "dreamy-nights",
//             "name": "Plush Bathrobe",
//             "short_description": "Ultra-soft bathrobe for cozy evenings.",
//             "long_description": "Luxurious plush bathrobe ideal for comfort and warmth after bath or bedtime.",
//             "color_variants": [
//                 "White",
//                 "Sky Blue"
//             ],
//             "size_variants": [
//                 "2-3 yrs",
//                 "4-5 yrs"
//             ],
//             "prices": {
//                 "White": {
//                     "2-3 yrs": 45,
//                     "4-5 yrs": 50
//                 },
//                 "Sky Blue": {
//                     "2-3 yrs": 45,
//                     "4-5 yrs": 50
//                 }
//             },
//             "discounted_prices": {
//                 "Sky Blue": {
//                     "4-5 yrs": 40
//                 }
//             },
//             "midjourney_prompt": "child wrapped comfortably in plush bathrobe, cozy home scene.",
//             "tag": "cozy",
//             "made_in": "Turkey",
//             "materials_used": "Plush Microfiber"
//         },
//         {
//             "id": "linen-summer-shirt",
//             "category_id": "everyday-luxe",
//             "name": "Linen Summer Shirt",
//             "short_description": "Breathable linen shirt perfect for summer.",
//             "long_description": "Light and airy linen shirt to keep cool in style during hot weather.",
//             "color_variants": [
//                 "White",
//                 "Light Blue"
//             ],
//             "size_variants": [
//                 "4-5 yrs",
//                 "6-7 yrs"
//             ],
//             "prices": {
//                 "White": {
//                     "4-5 yrs": 40,
//                     "6-7 yrs": 45
//                 },
//                 "Light Blue": {
//                     "4-5 yrs": 40,
//                     "6-7 yrs": 45
//                 }
//             },
//             "midjourney_prompt": "child enjoying sunny day wearing linen shirt, beach environment.",
//             "tag": "summer",
//             "made_in": "Portugal",
//             "materials_used": "100% Linen"
//         },
//         {
//             "id": "cotton-nightdress",
//             "category_id": "dreamy-nights",
//             "name": "Cotton Nightdress",
//             "short_description": "Soft cotton nightdress for sweet dreams.",
//             "long_description": "Comfortable and gentle cotton nightdress designed for restful sleep.",
//             "color_variants": [
//                 "Pink",
//                 "Lilac"
//             ],
//             "size_variants": [
//                 "2-3 yrs",
//                 "4-5 yrs"
//             ],
//             "prices": {
//                 "Pink": {
//                     "2-3 yrs": 30,
//                     "4-5 yrs": 35
//                 },
//                 "Lilac": {
//                     "2-3 yrs": 30,
//                     "4-5 yrs": 35
//                 }
//             },
//             "midjourney_prompt": "peacefully sleeping child in soft cotton nightdress, calm bedroom.",
//             "tag": "sleepwear",
//             "made_in": "India",
//             "materials_used": "Organic Cotton"
//         },
//         {
//             "id": "puffer-winter-jacket",
//             "category_id": "adventure-club",
//             "name": "Puffer Winter Jacket",
//             "short_description": "Insulated jacket for cold outdoor adventures.",
//             "long_description": "Stylish puffer jacket providing warmth and protection in winter.",
//             "color_variants": [
//                 "Navy",
//                 "Red"
//             ],
//             "size_variants": [
//                 "5-6 yrs",
//                 "7-8 yrs"
//             ],
//             "prices": {
//                 "Navy": {
//                     "5-6 yrs": 90,
//                     "7-8 yrs": 95
//                 },
//                 "Red": {
//                     "5-6 yrs": 90,
//                     "7-8 yrs": 95
//                 }
//             },
//             "discounted_prices": {
//                 "Red": {
//                     "5-6 yrs": 80
//                 }
//             },
//             "midjourney_prompt": "child outdoors in snow wearing insulated puffer jacket.",
//             "tag": "warm",
//             "made_in": "Canada",
//             "materials_used": "Polyester shell, Down filling"
//         },
//         {
//             "id": "knit-cardigan",
//             "category_id": "everyday-luxe",
//             "name": "Knit Cardigan",
//             "short_description": "Cozy knit cardigan for layering.",
//             "long_description": "Soft cardigan with button closure for extra warmth.",
//             "color_variants": [
//                 "Cream",
//                 "Grey"
//             ],
//             "size_variants": [
//                 "2-3 yrs",
//                 "4-5 yrs"
//             ],
//             "prices": {
//                 "Cream": {
//                     "2-3 yrs": 35,
//                     "4-5 yrs": 40
//                 },
//                 "Grey": {
//                     "2-3 yrs": 35,
//                     "4-5 yrs": 40
//                 }
//             },
//             "midjourney_prompt": "child playing at home in cozy knit cardigan.",
//             "tag": "layer",
//             "made_in": "Italy",
//             "materials_used": "Wool blend"
//         }
//     ]
// };

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    console.log('params', params);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // In a real app, you would fetch from your API:
                const awaitedParams = await params;
                const response = await fetch(`/api/product/${awaitedParams.id}`, { cache: 'no-store' });

                let data: Product | null = null;
                if (response.ok) {
                    data = (await response.json()) as Product;
                } else {
                    // Fallback to sample data if API not available
                    const sampleData = rawProductsJson as unknown as ProductsApiResponse;
                    data = sampleData.products.find(p => p.id === awaitedParams.id) ?? null;
                }

                if (!data) {
                    setError('Product not found');
                    return;
                }

                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
                setError('Failed to load product');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [params]);

    if (loading) {
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
        return (
            <>
                <Header />
                <NavBar />
                <div className={styles.productPage}>
                    <div className={styles.error}>
                        <h2>{error || 'Product not found'}</h2>
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