
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NavBar from "@/components/Navbar/Navbar";
import CarouselWrapper from "@/components/ImageCarousel/CarouselWrapper";
import ProductSlider from "@/components/ProductSlider/ProductSlider";

// Sample product data matching the image
const sampleProducts = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    brand: "Moulin Roty",
    name: "Moulin Roty: Activity gull Puce & Pilou",
    price: 16.00,
    isNew: true
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
    brand: "Moulin Roty",
    name: "Moulin Roty: Height Chart Puce & Pilou",
    price: 18.00,
    isNew: true
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop",
    brand: "Moulin Roty",
    name: "Moulin Roty: Yellow dog backpack Puce & Pilou",
    price: 41.00,
    isNew: true
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300&h=300&fit=crop",
    brand: "Moulin Roty",
    name: "Moulin Roty: Gull rattle doll - Puce & Pilou",
    price: 18.00,
    isNew: true
  },
  {
    id: "5",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    brand: "Moulin Roty",
    name: "Moulin Roty: Soft Ball - Puce & Pilou",
    price: 11.00,
    isNew: true
  },
  {
    id: "6",
    imageUrl: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300&h=300&fit=crop",
    brand: "Moulin Roty",
    name: "Moulin Roty: Gull rattle doll - Puce & Pilou",
    price: 18.00,
    isNew: true
  },
  {
    id: "7",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    brand: "Moulin Roty",
    name: "Moulin Roty: Soft Ball - Puce & Pilou",
    price: 11.00,
    isNew: true
  }
];

export default function Home() {
  return (
    <div>
      <Header />
      <NavBar />
      <CarouselWrapper />
      <ProductSlider
        title="New + Trending Products"
        products={sampleProducts}
      />
      <Footer />
    </div>
  );
}
