import { useState, useEffect } from 'react';
import { Product } from '@/types/product';

export const useProduct = (id: string) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
                const res = await fetch(`${baseUrl}/api/product/${id}`, { 
                    cache: 'no-store' 
                });
                
                if (!res.ok) {
                    setError('Product not found');
                    setProduct(null);
                    return;
                }
                
                const productData = await res.json();
                
                const cleanProduct: Product = {
                    ...productData,
                    prices: Object.fromEntries(
                        Object.entries(productData.prices).filter(([_, colorPrices]) => colorPrices !== undefined)
                    ) as Record<string, Record<string, number>>,
                    discounted_prices: productData.discounted_prices ? Object.fromEntries(
                        Object.entries(productData.discounted_prices).filter(([_, colorPrices]) => colorPrices !== undefined)
                    ) as Record<string, Record<string, number>> : undefined
                };
                
                setProduct(cleanProduct);
            } catch (error) {
                console.error('Error fetching product:', error);
                setError('Failed to fetch product');
                setProduct(null);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    return { product, loading, error };
}; 