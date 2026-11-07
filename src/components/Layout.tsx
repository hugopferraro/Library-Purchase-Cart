import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';

export function Layout() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    mainRef.current?.focus();
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#conteudo-principal">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo-principal" ref={mainRef} tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand"><BookIconSmall /><span><strong>Estante</strong> Livre</span></div>
          <p>Livros para todos, com uma experiência para cada pessoa.</p>
          <p>Projeto acadêmico de Desenvolvimento Full Stack.</p>
        </div>
      </footer>
    </div>
  );
}

function BookIconSmall() {
  return <span aria-hidden="true">◫</span>;
}
