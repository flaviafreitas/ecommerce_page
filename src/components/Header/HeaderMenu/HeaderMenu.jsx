import "./index.scss";

const HeaderMenu = () => {
  return (
    <header className="header-menu">
      <img src="/logo.png" alt="logo" className="header-menu__logo" />
      <ul>
        <li>Home</li>
        <li>Novidades</li>
        <li>Feminino</li>
        <li>Masculino</li>
        <li>Atendimento</li>
      </ul>
      <div className="header-menu__cart-shop">
        <h2>Meu Carrinho</h2>
        <img src="/cartshop.png" alt="cartLogo" />
      </div>
    </header>
  );
};

export default HeaderMenu;