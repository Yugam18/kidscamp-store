
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NavBar from "@/components/Navbar/Navbar";
import CarouselWrapper from "@/components/ImageCarousel/CarouselWrapper";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { client } from "@/services/contentful";
import { mapHeroAssetsToCarouselItems, mapFeaturedProductsToProductItems } from "./homepage.utils";


export default async function Home() {



  const response = await client.getEntries({
    content_type: 'homepage',
    limit: 10
  });

  const assets = await client.getAssets();

  

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
