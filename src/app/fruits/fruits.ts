import { Category } from "../categories/category";

export interface Fruits {
    id: number;
    name: string;
    quantity: number;
    price: number;
    category: Category;
  }