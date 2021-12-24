import { ProductContext } from '../../context/ProductContext';
import { useProduct } from '../hooks/useProduct';

import { IProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: IProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
