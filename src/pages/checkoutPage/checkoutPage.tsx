import { useNavigate } from 'react-router-dom';
import { BackLink, Button } from '../../components';
import styles from './checkoutPage.module.scss';

export const CheckoutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <BackLink link=".." />
      <div>
        <div className={styles.Container}>
          <div className={styles.ContainerTextWrapper}>
            <p className={styles.ContainerTextWrapperValue}>
              Thank you for your purchase!
            </p>

          </div>

          <Button
            text="Go shopping more!"
            onClick={() => navigate('/')}
            width={200}
          />
        </div>
      </div>
    </>
  );
};
