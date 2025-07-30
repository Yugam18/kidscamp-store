'use client';

import React from 'react';
import Carousel, { CarouselItem } from './Carousel';

const CarouselWrapper: React.FC = () => {
    // Sample carousel data - you can replace these with your Contentful data
    const carouselItems: CarouselItem[] = [
        {
            id: '1',
            imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=500&fit=crop',
            title: 'TEAMSON SALE',
            subtitle: 'Up to 30% Off',
            description: 'Everything',
            ctaLink: '/sale'
        },
        {
            id: '2',
            imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=500&fit=crop',
            title: 'NEW ARRIVALS',
            subtitle: 'Spring Collection',
            description: 'Discover the Latest Trends',
            ctaLink: '/new-arrivals'
        },
        {
            id: '3',
            imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=500&fit=crop',
            title: 'LIMITED TIME',
            subtitle: 'Flash Sale',
            description: 'Up to 50% Off Selected Items',
            ctaLink: '/flash-sale'
        }
    ];

    return (
        <div style={{ padding: '2rem', maxWidth: '100vw', margin: '0 auto' }}>
            {/* <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
                E-commerce Carousel Component
            </h1> */}

            <Carousel
                items={carouselItems}
                autoPlay={false}
                autoPlayInterval={4000}
                showIndicators={true}
                showArrows={true}
            />
            {/* 
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <h2>Component Features:</h2>
                <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
                    <li>✅ Responsive design</li>
                    <li>✅ Auto-play functionality</li>
                    <li>✅ Navigation arrows</li>
                    <li>✅ Indicator dots</li>
                    <li>✅ Call-to-action buttons</li>
                    <li>✅ Smooth transitions</li>
                    <li>✅ Customizable props</li>
                    <li>✅ TypeScript support</li>
                </ul>
            </div> */}
        </div>
    );
};

export default CarouselWrapper; 