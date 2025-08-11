
export interface CarouselItem {
  id: string;
  imageUrl: string;
  title?: string;
}

export type BasicCarouselItem = Pick<CarouselItem, 'id' | 'imageUrl' | 'title'>;

export interface ProductItem {
  id: string;
  imageUrl: string;
  brand: string;
  name: string;
  price: number;
}

interface ContentfulAssetFile {
  url?: string;
}

interface ContentfulAssetFields {
  title?: string;
  file?: ContentfulAssetFile;
}

interface ContentfulSys {
  id?: string;
}

interface ContentfulAssetLike {
  sys?: ContentfulSys;
  fields?: ContentfulAssetFields;
}

interface ContentfulProductFields {
  title?: string;
  productImage?: ContentfulAssetLike;
  subText?: string;
  price?: string;
  description?: string;
}

interface ContentfulProductEntry {
  sys?: ContentfulSys;
  fields?: ContentfulProductFields;
}

function normalizeContentfulUrl(url?: string): string | undefined {
  if (!url) return undefined;
  if (url.startsWith('//')) return `https:${url}`;
  return url;
}

export function mapHeroAssetsToCarouselItems(assets: unknown): BasicCarouselItem[] {
  if (!Array.isArray(assets)) return [];

  return (assets as ContentfulAssetLike[])
    .map((asset) => {
      const id = asset?.sys?.id ?? '';
      const imageUrl = normalizeContentfulUrl(asset?.fields?.file?.url) ?? '';
      return { id, imageUrl } as BasicCarouselItem;
    })
    .filter((item) => item.id && item.imageUrl);
}

export function mapFeaturedProductsToProductItems(products: unknown): ProductItem[] {
  if (!Array.isArray(products)) return [];

  return (products as ContentfulProductEntry[])
    .map((product) => {
      const id = product?.fields?.productImage?.fields?.title ?? '';
      const name = product?.fields?.title ?? '';
      const brand = product?.fields?.subText ?? 'KidsCamp';
      const price = parseFloat(product?.fields?.price?.replace('$', '') ?? '0');
      const imageUrl = normalizeContentfulUrl(product?.fields?.productImage?.fields?.file?.url) ?? '';
      
      return { id, imageUrl, brand, name, price } as ProductItem;
    })
    .filter((item) => item.id && item.imageUrl && item.name);
}
