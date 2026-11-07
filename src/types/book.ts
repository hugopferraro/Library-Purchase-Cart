export type BookCategory = 'Clássicos' | 'Fantasia' | 'Ficção científica' | 'Infantojuvenil';

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  category: BookCategory;
  price: number;
  coverUrl: string;
  coverAlt: string;
  featured?: boolean;
}

export interface CartItem extends Book {
  quantity: number;
}
