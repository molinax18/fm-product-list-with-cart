export interface ProductType {
  id: string;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

export interface ProductCartType extends ProductType {
  quantity: number;
}
