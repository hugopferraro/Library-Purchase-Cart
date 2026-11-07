import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="not-found container">
      <p className="error-code">404</p>
      <h1>Página não encontrada</h1>
      <p>O endereço informado não existe ou foi movido.</p>
      <Link className="button button-primary" to="/">Voltar ao catálogo</Link>
    </section>
  );
}
