import styles from './RightsPage.module.scss';

export const RightsPage = () => (
  <div className={styles.rights}>
    <p
      className={styles.rights__label}
    >
      &copy; LastSixSamurais 2024. All Rights Reserved.
    </p>
    <p className={styles.rights__rules}>
      The content, images, and materials on this website are protected
      by copyright law. Any use, reproduction, or distribution of these
      materials without the express written permission of LastSixSamurais
      is strictly prohibited. Unauthorized use may violate applicable
      copyright and trademark laws.
    </p>
  </div>
);
