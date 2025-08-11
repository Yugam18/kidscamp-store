'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductCard.module.scss';
import { Product } from '@/types/product';
import { getProductPriceInfo, getProductImageUrl, formatCategoryName, isNewProduct } from '@/utils/productUtils';

interface ProductCardProps {
    product: Product;
    rating?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
    product,
    rating = 0
}) => {
    const priceInfo = getProductPriceInfo(product);
    const imageUrl = getProductImageUrl(product);
    const categoryName = formatCategoryName(product.category_id);
    const isNew = isNewProduct(product);

  


    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`${styles.star} ${i <= rating ? styles.filled : ''}`}
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <Link href={`/product/${product.id}`} className={styles.productCard}>
            <div className={styles.imageContainer}>
                <Image
                    src={product.imgUrl ? product.imgUrl[0] : "https://images.unsplash.com/photo-1503944168849-6c1ead3ad683?w=300&h=300&fit=crop"}
                    alt={""}
                    width={300}
                    height={300}
                    className={styles.productImage}
                    
                />
                {isNew && <div className={styles.newBadge}>NEW</div>}
                {priceInfo.hasDiscount && <div className={styles.discountBadge}>SALE</div>}
            </div>

            <div className={styles.productInfo}>
                <div className={styles.brand}>{categoryName}</div>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.shortDescription}>{product.short_description}</p>

                <div className={styles.rating}>
                    {renderStars(rating)}
                </div>

                <div className={styles.priceContainer}>
                    <span className={styles.price}>${priceInfo.lowestPrice.toFixed(2)}</span>
                    {priceInfo.originalPrice && (
                        <span className={styles.originalPrice}>${priceInfo.originalPrice.toFixed(2)}</span>
                    )}
                </div>

                <div className={styles.productTags}>
                    <span className={`${styles.tag} ${styles[product.tag]}`}>{product.tag}</span>
                    <span className={styles.madeIn}>Made in {product.made_in}</span>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
