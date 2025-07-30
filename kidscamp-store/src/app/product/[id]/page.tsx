'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import NavBar from '@/components/Navbar/Navbar';
import Reviews from '@/components/Reviews/Reviews';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';
import Footer from '@/components/Footer/Footer';

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
    const [selectedSize, setSelectedSize] = useState('S');
    const [selectedImage, setSelectedImage] = useState(0);
    const [descriptionOpen, setDescriptionOpen] = useState(true);
    const [shippingOpen, setShippingOpen] = useState(true);

    return (
        <>
            <Header />
            <NavBar />
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Left Section - Image Gallery */}
                    <div className={styles.imageSection}>
                        {/* Breadcrumb Navigation */}
                        <nav className={styles.breadcrumb}>
                            <Link href="/" className={styles.backLink}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M19 12H5M12 19L5 12L12 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <span className={styles.breadcrumbText}>Home</span>
                            <span className={styles.breadcrumbSeparator}>/</span>
                            <span className={styles.breadcrumbText}>Product details</span>
                        </nav>

                        {/* Main Product Image */}
                        <div className={styles.mainImage}>
                            <img
                                src={productData.images[selectedImage]}
                                alt={productData.name}
                                className={styles.productImage}
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div className={styles.thumbnails}>
                            {productData.images.map((image, index) => (
                                <button
                                    key={index}
                                    className={`${styles.thumbnail} ${selectedImage === index ? styles.active : ''}`}
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <img
                                        src={image}
                                        alt={`${productData.name} view ${index + 1}`}
                                        className={styles.thumbnailImage}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Section - Product Details */}
                    <div className={styles.detailsSection}>
                        {/* Product Category */}
                        <div className={styles.category}>{productData.category}</div>

                        {/* Product Name */}
                        <h1 className={styles.productName}>{productData.name}</h1>

                        {/* Price */}
                        <div className={styles.price}>${productData.price}</div>

                        {/* Delivery Information */}
                        <div className={styles.deliveryInfo}>
                            <svg className={styles.clockIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                <polyline points="12,6 12,12 16,14" strokeWidth="2" />
                            </svg>
                            <span>Order in <strong>02:30:25</strong> to get next day delivery</span>
                        </div>

                        {/* Size Selection */}
                        <div className={styles.sizeSection}>
                            <label className={styles.sizeLabel}>Select Size</label>
                            <div className={styles.sizeButtons}>
                                {productData.sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`${styles.sizeButton} ${selectedSize === size ? styles.selected : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className={styles.actionButtons}>
                            <button className={styles.addToCartButton}>
                                Add to Cart
                            </button>
                            <button className={styles.wishlistButton}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.04097 1.5487 8.5C1.5487 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        {/* Description & Fit Section */}
                        <div className={styles.collapsibleSection}>
                            <button
                                className={styles.sectionHeader}
                                onClick={() => setDescriptionOpen(!descriptionOpen)}
                            >
                                <span>Description & Fit</span>
                                <svg
                                    className={`${styles.chevron} ${descriptionOpen ? styles.rotated : ''}`}
                                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                >
                                    <path d="M6 9L12 15L18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            {descriptionOpen && (
                                <div className={styles.sectionContent}>
                                    <p>{productData.description}</p>
                                </div>
                            )}
                        </div>

                        {/* Shipping Section */}
                        <div className={styles.collapsibleSection}>
                            <button
                                className={styles.sectionHeader}
                                onClick={() => setShippingOpen(!shippingOpen)}
                            >
                                <span>Shipping</span>
                                <svg
                                    className={`${styles.chevron} ${shippingOpen ? styles.rotated : ''}`}
                                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                >
                                    <path d="M6 9L12 15L18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            {shippingOpen && (
                                <div className={styles.sectionContent}>
                                    <div className={styles.shippingGrid}>
                                        <div className={styles.shippingItem}>
                                            <svg className={styles.shippingIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="M9 7H5C3.89543 7 3 7.89543 3 9V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7H15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M16 5C16 6.10457 15.1046 7 14 7H10C8.89543 7 8 6.10457 8 5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className={styles.shippingText}>
                                                <span className={styles.shippingLabel}>Discount</span>
                                                <span className={styles.shippingValue}>{productData.shipping.discount}</span>
                                            </div>
                                        </div>

                                        <div className={styles.shippingItem}>
                                            <svg className={styles.shippingIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3 10H21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className={styles.shippingText}>
                                                <span className={styles.shippingLabel}>Package</span>
                                                <span className={styles.shippingValue}>{productData.shipping.package}</span>
                                            </div>
                                        </div>

                                        <div className={styles.shippingItem}>
                                            <svg className={styles.shippingIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                                <polyline points="12,6 12,12 16,14" strokeWidth="2" />
                                            </svg>
                                            <div className={styles.shippingText}>
                                                <span className={styles.shippingLabel}>Delivery Time</span>
                                                <span className={styles.shippingValue}>{productData.shipping.deliveryTime}</span>
                                            </div>
                                        </div>

                                        <div className={styles.shippingItem}>
                                            <svg className={styles.shippingIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <rect x="1" y="3" width="15" height="13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <polygon points="16,8 20,8 23,11 23,16 16,16 16,8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <circle cx="5.5" cy="18.5" r=".5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <circle cx="18.5" cy="18.5" r=".5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className={styles.shippingText}>
                                                <span className={styles.shippingLabel}>Estimation Arrive</span>
                                                <span className={styles.shippingValue}>{productData.shipping.estimatedArrival}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className={styles.additionalSections}>
                <Reviews />
                <RelatedProducts />
            </div>
            <Footer />
        </>
    );
} 