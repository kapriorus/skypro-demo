export type TState = {
  products: {
    list: TProduct[];
  };
};

export type TProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type TCart = {
  [key: number]: number;
};