'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import NavBar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './page.module.scss';
import { Product, ProductsApiResponse } from '@/types/product';

// Sample API data - replace this with actual API call
const sampleApiData: ProductsApiResponse = {
    "products": [
        {
            "id": "floral-party-dress",
            "category_id": "little-royals",
            "name": "Floral Party Dress",
            "short_description": "Elegant floral print dress for special occasions.",
            "long_description": "Charming floral dress with satin finish and ribbon accents.",
            "color_variants": [
                "Floral Pink",
                "Ivory Floral"
            ],
            "size_variants": [
                "2-3 yrs",
                "4-5 yrs"
            ],
            "prices": {
                "Floral Pink": {
                    "2-3 yrs": 75,
                    "4-5 yrs": 80
                },
                "Ivory Floral": {
                    "2-3 yrs": 75,
                    "4-5 yrs": 80
                }
            },
            "midjourney_prompt": "child elegantly dressed in floral print satin dress, festive atmosphere.",
            "tag": "popular",
            "made_in": "Italy",
            "materials_used": "Satin, Cotton lining, Ribbon"
        },
        {
            "id": "denim-overalls",
            "category_id": "everyday-luxe",
            "name": "Denim Overalls",
            "short_description": "Classic denim overalls perfect for everyday wear.",
            "long_description": "Comfortable denim overalls with adjustable straps and pockets.",
            "color_variants": [
                "Classic Blue"
            ],
            "size_variants": [
                "3-4 yrs",
                "5-6 yrs"
            ],
            "prices": {
                "Classic Blue": {
                    "3-4 yrs": 50,
                    "5-6 yrs": 55
                }
            },
            "midjourney_prompt": "playful child wearing denim overalls, casual and playful environment.",
            "tag": "essential",
            "made_in": "USA",
            "materials_used": "100% Cotton Denim"
        },
        {
            "id": "plush-bathrobe",
            "category_id": "dreamy-nights",
            "name": "Plush Bathrobe",
            "short_description": "Ultra-soft bathrobe for cozy evenings.",
            "long_description": "Luxurious plush bathrobe ideal for comfort and warmth after bath or bedtime.",
            "color_variants": [
                "White",
                "Sky Blue"
            ],
            "size_variants": [
                "2-3 yrs",
                "4-5 yrs"
            ],
            "prices": {
                "White": {
                    "2-3 yrs": 45,
                    "4-5 yrs": 50
                },
                "Sky Blue": {
                    "2-3 yrs": 45,
                    "4-5 yrs": 50
                }
            },
            "discounted_prices": {
                "Sky Blue": {
                    "4-5 yrs": 40
                }
            },
            "midjourney_prompt": "child wrapped comfortably in plush bathrobe, cozy home scene.",
            "tag": "cozy",
            "made_in": "Turkey",
            "materials_used": "Plush Microfiber"
        },
        {
            "id": "linen-summer-shirt",
            "category_id": "everyday-luxe",
            "name": "Linen Summer Shirt",
            "short_description": "Breathable linen shirt perfect for summer.",
            "long_description": "Light and airy linen shirt to keep cool in style during hot weather.",
            "color_variants": [
                "White",
                "Light Blue"
            ],
            "size_variants": [
                "4-5 yrs",
                "6-7 yrs"
            ],
            "prices": {
                "White": {
                    "4-5 yrs": 40,
                    "6-7 yrs": 45
                },
                "Light Blue": {
                    "4-5 yrs": 40,
                    "6-7 yrs": 45
                }
            },
            "midjourney_prompt": "child enjoying sunny day wearing linen shirt, beach environment.",
            "tag": "summer",
            "made_in": "Portugal",
            "materials_used": "100% Linen"
        },
        {
            "id": "cotton-nightdress",
            "category_id": "dreamy-nights",
            "name": "Cotton Nightdress",
            "short_description": "Soft cotton nightdress for sweet dreams.",
            "long_description": "Comfortable and gentle cotton nightdress designed for restful sleep.",
            "color_variants": [
                "Pink",
                "Lilac"
            ],
            "size_variants": [
                "2-3 yrs",
                "4-5 yrs"
            ],
            "prices": {
                "Pink": {
                    "2-3 yrs": 30,
                    "4-5 yrs": 35
                },
                "Lilac": {
                    "2-3 yrs": 30,
                    "4-5 yrs": 35
                }
            },
            "midjourney_prompt": "peacefully sleeping child in soft cotton nightdress, calm bedroom.",
            "tag": "sleepwear",
            "made_in": "India",
            "materials_used": "Organic Cotton"
        },
        {
            "id": "puffer-winter-jacket",
            "category_id": "adventure-club",
            "name": "Puffer Winter Jacket",
            "short_description": "Insulated jacket for cold outdoor adventures.",
            "long_description": "Stylish puffer jacket providing warmth and protection in winter.",
            "color_variants": [
                "Navy",
                "Red"
            ],
            "size_variants": [
                "5-6 yrs",
                "7-8 yrs"
            ],
            "prices": {
                "Navy": {
                    "5-6 yrs": 90,
                    "7-8 yrs": 95
                },
                "Red": {
                    "5-6 yrs": 90,
                    "7-8 yrs": 95
                }
            },
            "discounted_prices": {
                "Red": {
                    "5-6 yrs": 80
                }
            },
            "midjourney_prompt": "child outdoors in snow wearing insulated puffer jacket.",
            "tag": "warm",
            "made_in": "Canada",
            "materials_used": "Polyester shell, Down filling"
        },
        {
            "id": "knit-cardigan",
            "category_id": "everyday-luxe",
            "name": "Knit Cardigan",
            "short_description": "Cozy knit cardigan for layering.",
            "long_description": "Soft cardigan with button closure for extra warmth.",
            "color_variants": [
                "Cream",
                "Grey"
            ],
            "size_variants": [
                "2-3 yrs",
                "4-5 yrs"
            ],
            "prices": {
                "Cream": {
                    "2-3 yrs": 35,
                    "4-5 yrs": 40
                },
                "Grey": {
                    "2-3 yrs": 35,
                    "4-5 yrs": 40
                }
            },
            "midjourney_prompt": "child playing at home in cozy knit cardigan.",
            "tag": "layer",
            "made_in": "Italy",
            "materials_used": "Wool blend"
        },
        {
            "id": "active-play-set",
            "category_id": "adventure-club",
            "name": "Active Play Set",
            "short_description": "T-shirt and shorts set for active kids.",
            "long_description": "Durable set designed for running and playing outdoors.",
            "color_variants": [
                "Green",
                "Orange"
            ],
            "size_variants": [
                "3-4 yrs",
                "5-6 yrs"
            ],
            "prices": {
                "Green": {
                    "3-4 yrs": 45,
                    "5-6 yrs": 50
                },
                "Orange": {
                    "3-4 yrs": 45,
                    "5-6 yrs": 50
                }
            },
            "midjourney_prompt": "energetic child playing outside wearing active set.",
            "tag": "sporty",
            "made_in": "Vietnam",
            "materials_used": "Polyester, Cotton blend"
        }
    ]
};

export default function ProductListingPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call - replace this with actual API call
        const fetchProducts = async () => {
            try {
                // In a real app, you would fetch from your API:
                // const response = await fetch('/api/products');
                // const data: ProductsApiResponse = await response.json();

                // For now, using sample data
                const data = sampleApiData;
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

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
                    <p className={styles.subtitle}>Discover our complete collection of kids' fashion</p>
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
