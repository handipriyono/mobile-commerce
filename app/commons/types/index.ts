export type TProductItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  total?: number | string;
  rating: {
    rate: number;
    count: number;
  };
};

export type TObj = {
  [key: string]: any;
};

export type itemDB = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export type CartDB = {
  id: number;
  itemId: number;
};
