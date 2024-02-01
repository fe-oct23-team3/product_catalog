import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import { Icon } from '../Icon';

export const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const arrayOfCrumbs = pathname.split('/')
    .filter(path => path.length > 0);

  return (
    <div className={styles.breadcrumbs}>
      <label htmlFor="home_link">
        <Link
          id="home_link"
          to="/"
          aria-label="go home icon"
          className={styles.breadcrumbs__home_link}
        >
          <Icon type="Home" color="Main" />
        </Link>
      </label>
      {arrayOfCrumbs.map((crumb, index) => {
        const capitalCrumb = crumb[0].toUpperCase() + crumb.slice(1);
        const currenPath = arrayOfCrumbs.slice(0, index + 1).join('/');

        return (
          <div
            className={styles.breadcrumbs__location_wrapper}
            key={crumb}
          >
            <Icon type="ArrowLeft" color="Disabled" />

            <Link
              className={styles['breadcrumbs--location-page-name']}
              to={`/${currenPath}`}
            >
              {capitalCrumb}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
