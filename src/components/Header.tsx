import styles from './Header.module.css';

type Props = {
  onClick: () => void;
};

function Header({ onClick }: Props) {
  return (
    <header className={styles.header} role="button" onClick={onClick}>
      <h1 className={styles.header__title}>Star Wars Registry</h1>
    </header>
  );
}

export default Header;
