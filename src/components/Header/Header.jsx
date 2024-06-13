import headerStyle from './Header.module.css';

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <h1 className={headerStyle.title}>Il mio blog</h1>
    </header>
  );
}

export default Header;