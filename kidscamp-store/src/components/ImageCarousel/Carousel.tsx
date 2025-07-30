'use client';

import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.scss';

export interface CarouselItem {
    id: string;
    imageUrl: string;
    title?: string;
    subtitle?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
}

interface CarouselProps {
    items: CarouselItem[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
    showIndicators?: boolean;
    showArrows?: boolean;
    className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
    items,
    autoPlay = true,
    autoPlayInterval = 5000,
    showIndicators = true,
    showArrows = true,
    className = ''
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play functionality
    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, items.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    if (!items || items.length === 0) {
        return <div className={styles['carousel-empty']}>No carousel items provided</div>;
    }

    return (
        <div className={`${styles.carousel} ${className}`}>
            <div className={styles['carousel-container']}>
                <div
                    className={styles['carousel-slides']}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <div key={item.id} className={styles['carousel-slide']}>
                            <div className={styles['carousel-image-container']}>
                                <img
                                    src={item.imageUrl}
                                    alt={item.title || `Slide ${index + 1}`}
                                    className={styles['carousel-image']}
                                />
                                <div className={styles['carousel-overlay']}>
                                    {item.title && (
                                        <div className={styles['carousel-title']}>{item.title}</div>
                                    )}
                                    {item.subtitle && (
                                        <div className={styles['carousel-subtitle']}>{item.subtitle}</div>
                                    )}
                                    {item.description && (
                                        <div className={styles['carousel-description']}>{item.description}</div>
                                    )}
                                </div>
                                {item.ctaLink && (
                                    <a
                                        href={item.ctaLink}
                                        className={styles['carousel-image-link']}
                                        aria-label={`Navigate to ${item.title || 'slide'}`}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {showArrows && items.length > 1 && (
                    <>
                        <button
                            className={`${styles['carousel-arrow']} ${styles['carousel-arrow-left']}`}
                            onClick={goToPrevious}
                            aria-label="Previous slide"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            className={`${styles['carousel-arrow']} ${styles['carousel-arrow-right']}`}
                            onClick={goToNext}
                            aria-label="Next slide"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </>
                )}

                {showIndicators && items.length > 1 && (
                    <div className={styles['carousel-indicators']}>
                        {items.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles['carousel-indicator']} ${index === currentIndex ? styles.active : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}


            </div>
        </div>
    );
};

export default Carousel; 