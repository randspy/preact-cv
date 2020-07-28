import { Text } from 'components/shared/language';
import styles from './home.scss';

const Home = () => {
  return (
    <section class="primary-lightest-bg-color primary-dark-color">
      <div className={styles['home--section']}>
        <div className={styles['home--content']}>
          <h1 class="primary mb-0">
            <Text id="home-title" />
          </h1>
          <h3 class="secondary normal-weight">
            <Text id="home-subtitle" />
          </h3>
          <button class="btn secondary-bg-color primary-dark-color mt-2">
            <Text id="home-expertise" />
          </button>
          <img
            src="assets/photos/imac_isometric.svg"
            alt="A computer on a table"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
