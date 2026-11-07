import { Link } from 'react-router-dom';
import { ArrowIcon, CartIcon } from '../components/Icons';
import { QuantityControl } from '../components/QuantityControl';
import { clearCart, removeFromCart, setQuantity } from '../store/cartSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { formatCurrency } from '../utils/currency';

export function CartPage() {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  if (!items.length) {
    return (
      <section className="cart-page container" aria-labelledby="cart-title">
        <div className="empty-cart">
          <span className="empty-icon"><CartIcon /></span>
          <h1 id="cart-title">Seu carrinho está vazio</h1>
          <p>Que tal encontrar uma história para acompanhar você?</p>
          <Link className="button button-primary" to="/">Explorar o catálogo <ArrowIcon /></Link>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page container" aria-labelledby="cart-title">
      <div className="cart-heading">
        <div><p className="kicker dark">Sua seleção</p><h1 id="cart-title">Carrinho de compras</h1><p>{count} {count === 1 ? 'item selecionado' : 'itens selecionados'}</p></div>
        <button className="text-button" type="button" onClick={() => dispatch(clearCart())}>Esvaziar carrinho</button>
      </div>

      <div className="cart-layout">
        <ul className="cart-items" aria-label="Livros no carrinho">
          {items.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.coverUrl} alt="" width="88" height="132" />
              <div className="cart-item-info">
                <p className="eyebrow">{item.category}</p>
                <h2>{item.title}</h2>
                <p>por {item.author}</p>
                <button className="remove-button" type="button" onClick={() => dispatch(removeFromCart(item.id))} aria-label={`Remover ${item.title} do carrinho`}>Remover</button>
              </div>
              <div className="cart-item-controls">
                <QuantityControl title={item.title} quantity={item.quantity} onChange={(quantity) => dispatch(setQuantity({ id: item.id, quantity }))} />
                <p className="item-total"><span className="sr-only">Total do item: </span>{formatCurrency(item.price * item.quantity)}</p>
              </div>
            </li>
          ))}
        </ul>

        <aside className="order-summary" aria-labelledby="summary-title">
          <h2 id="summary-title">Resumo do pedido</h2>
          <dl><div><dt>Subtotal</dt><dd>{formatCurrency(subtotal)}</dd></div><div><dt>Entrega</dt><dd>Grátis</dd></div></dl>
          <div className="summary-total"><span>Total</span><strong>{formatCurrency(subtotal)}</strong></div>
          <button className="button button-primary checkout-button" type="button" onClick={() => window.alert('Demonstração acadêmica: compra simulada com sucesso!')}>Finalizar compra</button>
          <p className="secure-note">Ambiente acadêmico — nenhum pagamento será processado.</p>
          <Link className="continue-link" to="/">← Continuar comprando</Link>
        </aside>
      </div>
    </section>
  );
}
