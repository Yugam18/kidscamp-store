// Product types based on the API data structure

export interface Product {
    id: string;
    category_id: string;
    name: string;
    short_description: string;
    long_description: string;
    color_variants: string[];
    size_variants: string[];
    prices: Record<string, Record<string, number>>;
    discounted_prices?: Record<string, Record<string, number>>;
    midjourney_prompt: string;
    tag: string;
    made_in: string;
    materials_used: string;
}

export interface ProductsApiResponse {
    products: Product[];
}

// Helper type for getting the lowest price of a product
export interface ProductPriceInfo {
    lowestPrice: number;
    originalPrice?: number;
    hasDiscount: boolean;
}

// For product card display
export interface ProductCardData {
    id: string;
    name: string;
    short_description: string;
    category_id: string;
    priceInfo: ProductPriceInfo;
    tag: string;
    imageUrl?: string; // Will be generated from midjourney_prompt or use placeholder
}

// For product detail page
export interface ProductDetailData extends Product {
    selectedColor?: string;
    selectedSize?: string;
    currentPrice?: number;
    hasDiscount?: boolean;
}
