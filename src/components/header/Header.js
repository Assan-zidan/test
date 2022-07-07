import banner from '../../images/banner.png'

import styles from './Header.module.css'

const Header = () => {
  return (
    <>
      <div>
        <img src={banner} className={styles.banner} />
      </div>
    </>
  );
};

export default Header;
