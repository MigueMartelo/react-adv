import { ReactElement } from 'react';

export interface IProps {
  product: IProduct;
  children?: ReactElement | ReactElement[];
}

export interface IProduct {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: IProduct;
}

export interface ProductCardHOCProps {
  ({ children, product }: IProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
