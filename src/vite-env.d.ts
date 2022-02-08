/// <reference types="vite/client" />
type StoreItem = {
  id: number;
  name: string;
  price: number;
};
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type State = {
  items: StoreItem[];
  cart: CartItem[];
};
    