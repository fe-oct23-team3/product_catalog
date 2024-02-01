import { Link } from 'react-router-dom';
import style from './ProductCard.module.scss';
import { Product } from '../../types/Product';
import { useContextProvider } from '../../context/ProductsContext';
import { scrollToTop } from '../../utils/scrollToTop';
import { Button } from '../Button';
import { LikeButton } from '../LikeButton/LikeButton';

interface Props {
  product: Product,
}

const ADDED = 'Added';
const NOT_ADDED = 'Add to cart';

const containsProduct = (products: Product[], productId: number): boolean => {
  return products.some((product) => product.id === productId);
};

export const ProductCard: React.FC<Props> = (props) => {
  const { product } = props;

  const {
    id,
    itemId,
    category,
    image,
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
  } = product;

  const {
    toogleSelectCart,
    toogleSelectFavorite,
    favourites,
    cartProducts,
  } = useContextProvider();

  const hasLowPrice = price && fullPrice;
  const isInFavorites = containsProduct(favourites, id);
  const isInCart = containsProduct(cartProducts, id);

  return (
    <div className={style.card}>
      <Link to={`/${category}/${itemId}`} onClick={scrollToTop}>
        <div className={style.card__image_wrapper}>
          <img
            className={style.card__product_image}
            alt={`${name}`}
            src={`${image}`}
          />
        </div>

        <h3
          className={style.card__product_name}
        >
          {name}
        </h3>
      </Link>

      <div className={style.card__price_wrapper}>
        {hasLowPrice
          ? (
            <>
              <p className={style.card__price}>{price}</p>
              <p className={style.card__old_price}>{fullPrice}</p>
            </>
          )
          : (
            <p className={style.card__price}>{fullPrice}</p>
          )}
      </div>

      <div className={style.card__break_line} />

      <div className={style.card__info}>
        <div className={style.card__option_wrapper}>
          <p className={style.card__option}>Screen</p>
          <p className={style.card__option_value}>{screen}</p>
        </div>

        <div className={style.card__option_wrapper}>
          <p className={style.card__option}>Capacity</p>
          <p className={style.card__option_value}>{capacity}</p>
        </div>

        <div className={style.card__option_wrapper}>
          <p className={style.card__option}>RAM</p>
          <p className={style.card__option_value}>{ram}</p>
        </div>
      </div>

      <div className={style.card__buttons_wrapper}>
        <Button
          text={isInCart ? ADDED : NOT_ADDED}
          onClick={() => toogleSelectCart(product)}
          width={160}
          isSelected={isInCart}
        />

        <LikeButton
          isSelected={isInFavorites}
          onClick={() => toogleSelectFavorite(product)}
          size={40}
        />
      </div>
    </div>
  );
};
