export type productsType = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string;
  creationAt: string;
  updatedAt: string;
  category: { name: string; id: number };
};
