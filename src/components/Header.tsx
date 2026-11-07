import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { BookIcon, CartIcon } from './Icons';

export function Header() {
  const itemCount = useAppSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink className="brand" to="/" aria-label="Estante Livre — página inicial">
          <span className="brand-mark"><BookIcon /></span>
          <span><strong>Estante</strong> Livre</span>
        </NavLink>
        <nav aria-label="Navegação principal">
          <ul className="nav-list">
            <li><NavLink to="/" end>Catálogo</NavLink></li>
            <li>
              <NavLink className="cart-link" to="/carrinho">
                <CartIcon />
                <span>Carrinho</span>
                <span className="cart-count" aria-label={`${itemCount} ${itemCount === 1 ? 'item' : 'itens'} no carrinho`} aria-live="polite">
                  {itemCount}
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
