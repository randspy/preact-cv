import { LanguageSelector, Text } from 'components/shared/language';
import styles from './menu.scss';

const Menu = () => {
  return (
    <nav className={styles['menu--container']}>
      <div className={styles['menu--language']}>
        <LanguageSelector />{' '}
      </div>
      <div className={styles['menu--mobile']}>
        <button className={`${styles['menu--button']}`}>
          <Text id="menu-home" />
        </button>
        <button className={`${styles['menu--button']}`}>
          <Text id="menu" />
        </button>
        <button className={`${styles['menu--button']}`}>
          <Text id="menu-home" />
        </button>
      </div>
      <div className={styles['menu--desktop']}>
        <button className={`${styles['menu--button']}`}>
          <Text id="menu-home" />
        </button>
        <button className={`${styles['menu--button']}`}>
          <Text id="menu-expertise" />
        </button>
        <button className={`${styles['menu--button']}`}>
          <Text id="menu-skills" />
        </button>
        <button className={`${styles['menu--button']}`}>
          <Text id="menu-experience" />
        </button>
        <button className={`${styles['menu--button']}`}>
          <Text id="menu-education" />
        </button>
        <button className={`${styles['menu--button']}`}>
          <Text id="menu-content" />
        </button>
      </div>
    </nav>
  );
};

export default Menu;
