
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NavBar from "@/components/Navbar/Navbar";
import CarouselWrapper from "@/components/ImageCarousel/CarouselWrapper";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { client } from "@/services/contentful";
import { mapHeroAssetsToCarouselItems, mapFeaturedProductsToProductItems } from "./homepage.utils";




// Sample product data that matches our PDP product IDs
const sampleProducts = [
  {
    id: "floral-party-dress",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    brand: "Little Royals",
    name: "Floral Party Dress",
    price: 75.00,
    isNew: true
  },
  {
    id: "denim-overalls",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
    brand: "Everyday Luxe",
    name: "Denim Overalls",
    price: 50.00,
    isNew: true
  },
  {
    id: "plush-bathrobe",
    imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop",
    brand: "Dreamy Nights",
    name: "Plush Bathrobe",
    price: 40.00,

  },
  {
    id: "linen-summer-shirt",
    imageUrl: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300&h=300&fit=crop",
    brand: "Everyday Luxe",
    name: "Linen Summer Shirt",
    price: 40.00,

  },
  {
    id: "puffer-winter-jacket",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    brand: "Adventure Club",
    name: "Puffer Winter Jacket",
    price: 80.00,

  },
  {
    id: "cotton-nightdress",
    imageUrl: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300&h=300&fit=crop",
    brand: "Dreamy Nights",
    name: "Cotton Nightdress",
    price: 30.00,

  }
];

export default async function Home() {
  const response = await client.getEntries({
    content_type: 'homepage',
    limit: 10
  });



  const homepage = response.items[0]?.fields;
  const [heroImages, featuredProducts] = [homepage.heroImage, homepage.featuredProducts];

  const heroItems = mapHeroAssetsToCarouselItems(heroImages);
  const productItems = mapFeaturedProductsToProductItems(featuredProducts);
  return (
    <div>
      <Header />
      <NavBar />
      <CarouselWrapper items={heroItems} />
      <ProductSlider
        title="Trending Products"
        products={productItems}
      />
      <Footer />
    </div>
  );
}
