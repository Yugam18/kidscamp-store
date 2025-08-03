'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import NavBar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import ProductCorousel from '@/components/ProductCorousel/ProductCorousel';


// Mock product data - in a real app, this would come from an API
const productData = {
    id: '1',
    category: 'Man Fashion',
    name: 'Loose Fit Hoodie',
    price: 24.99,
    images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=800&fit=crop',
        'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=800&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Loose-fit sweatshirt hoodie in medium weight cotton-blend fabric with a generous, but not oversized silhouette, Jersey-lined, drawstring hood, dropped shoulders, long sleeves, and a kangaroo pocket. Wide ribbing at cuffs and hem. Soft, brushed inside.',
    shipping: {
        discount: 'Disc 50%',
        package: 'Regular Package',
        deliveryTime: '3-4 Working Days',
        estimatedArrival: '10-12 October 2024'
    }
};

export default function ProductDetailPage({ params }: { params: { id: string } }) {
   

    const productData = {
        images: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300&h=300&fit=crop",
        ],
        title: "Rainbow Kitty Graphic Tee, Hydrangea",
        price: 26.0,
        rating: 4,
        sizes: ["3-6m", "6-9m", "9-12m", "12-18m", "18-24m", "2y", "3y", "4y", "5y", "6y", "7y", "8y", "10y", "12y", "14y"],
        shippingInfo: "Free standard shipping on this item",
        description: "Our in-house artists gave this feline friend a color-splashed makeover that's full of charm and personality. With its bold rainbow stripes and playful expression, this kitty's ready for backyard adventures, sunny camp days, and everything in between.",
    };
    const productImages = [
        '/assets/images/logo.png',
        '/assets/images/logo2.jpeg'

    ];

    return (
        <>
            <Header />
            <NavBar />
            <div className={styles.productPage}>

                <ProductCorousel images={productImages} alt="Product Image" />
                <ProductDetails
                    title={productData.title}
                    price={productData.price}
                    sizes={productData.sizes}
                    shippingInfo={productData.shippingInfo}
                    description={productData.description}
                />
            </div>
            <Footer />
        </>
    );
} 