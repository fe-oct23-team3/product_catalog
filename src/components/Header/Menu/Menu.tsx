import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { useContext } from 'react';
import { Icon } from '../../Icon/Icon';
import { ProductsCounter } from '../ProductsCounter/ProductsCounter';
import { ProductsContext } from '../../../context/ProductsContext';
import styles from './Menu.module.scss';

function getLinkClass({ isActive }: { isActive: boolean }): string {
  return cn(styles.menu__link, { [styles['menu__link--active']]: isActive });
}

function getButtonClass({ isActive }: { isActive: boolean }): string {
  return cn(
    styles.menu__button,
    { [styles['menu__button--active']]: isActive },
  );
}

interface Props {
  onHide: () => void;
  show: boolean;
}

export const Menu: React.FC<Props> = ({ onHide, show }) => {
  const { cartProducts, favourites } = useContext(ProductsContext);
  const cartProductsQuantity = cartProducts.length;
  const favouritesProductsQuantity = favourites.length;

  return (
    <aside
      className={cn(styles.menu, { [`${styles['menu--active']}`]: show })}
    >
      <nav className={styles.menu__nav}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__list_item}>
            <NavLink
              to="/"
              className={getLinkClass}
              onClick={onHide}
            >
              Home
            </NavLink>
          </li>

          <li className={styles.menu__list_item}>
            <NavLink
              to="/phones"
              className={getLinkClass}
              onClick={onHide}
            >
              Phones
            </NavLink>
          </li>

          <li className={styles.menu__list_item}>
            <NavLink
              to="/tablets"
              className={getLinkClass}
              onClick={onHide}
            >
              Tablets
            </NavLink>
          </li>

          <li className={styles.menu__list_item}>
            <NavLink
              to="/accessories"
              className={getLinkClass}
              onClick={onHide}
            >
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.menu__buttons}>
        <NavLink
          to="favourites"
          className={getButtonClass}
          onClick={onHide}
        >
          <Icon type="Heart" color="Main" />
          {!!favouritesProductsQuantity
            && <ProductsCounter quantity={favouritesProductsQuantity} />}
        </NavLink>

        <NavLink
          to="cart"
          className={getButtonClass}
          onClick={onHide}
        >
          <Icon type="Cart" color="Main" />
          {!!cartProductsQuantity
            && <ProductsCounter quantity={cartProductsQuantity} />}
        </NavLink>
      </div>
    </aside>
  );
};
