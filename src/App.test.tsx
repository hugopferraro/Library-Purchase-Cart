import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { beforeEach, describe, expect, it } from 'vitest';
import App from './App';
import { createAppStore } from './store/store';

const renderApp = () => render(<Provider store={createAppStore({ items: [] })}><App /></Provider>);

describe('aplicação Estante Livre', () => {
  beforeEach(() => window.history.pushState({}, '', '/'));

  it('não apresenta violações automáticas de acessibilidade na página inicial', async () => {
    const { container } = renderApp();
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('filtra o catálogo por título', async () => {
    const user = userEvent.setup();
    renderApp();
    await user.type(screen.getByRole('searchbox', { name: /buscar no catálogo/i }), 'Duna');

    expect(screen.getByRole('heading', { name: 'Duna' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'O Hobbit' })).not.toBeInTheDocument();
    expect(screen.getByText('1 livro encontrado')).toBeInTheDocument();
  });

  it('adiciona um livro e o apresenta no carrinho', async () => {
    const user = userEvent.setup();
    renderApp();
    await user.click(screen.getByRole('button', { name: /adicionar dom casmurro/i }));
    expect(screen.getByText(/dom casmurro foi adicionado/i)).toBeInTheDocument();
    await user.click(screen.getByRole('link', { name: /carrinho/i }));
    expect(screen.getByRole('heading', { name: 'Dom Casmurro' })).toBeInTheDocument();
  });
});
