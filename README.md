# Estante Livre

Livraria online acessível desenvolvida para a **Parada Obrigatória 2** da disciplina de Desenvolvimento Full Stack. A aplicação oferece catálogo com busca e filtros, carrinho persistente e uma experiência responsiva pensada para teclado, leitores de tela e diferentes preferências de movimento.

> **Aplicação publicada:** o endereço do Vercel será inserido aqui após o primeiro deploy.

## Funcionalidades

- Catálogo com seis livros, busca por título/autor e filtro por categoria;
- Carrinho com adição, remoção, alteração de quantidade, totais e persistência local;
- Rotas para catálogo, carrinho e página não encontrada;
- Layout responsivo para computador, tablet e celular;
- Feedback acessível para alterações dinâmicas do carrinho;
- Fallback visual quando uma capa externa não pode ser carregada.

## Acessibilidade

- HTML semântico com `header`, `nav`, `main`, `section`, `article`, `aside` e `footer`;
- Hierarquia lógica de títulos e um único `h1` por rota;
- Link de salto para o conteúdo principal;
- Navegação integral por teclado e foco visível;
- Transferência de foco ao navegar entre rotas;
- Textos alternativos descritivos nas capas e imagens decorativas com `alt=""`;
- Nomes acessíveis específicos em botões de adicionar, remover e alterar quantidades;
- Regiões `aria-live` para quantidade do carrinho, resultados e confirmações;
- Contraste alto, alvos de interação amplos e suporte a `prefers-reduced-motion`;
- Teste automatizado com axe para detectar violações comuns das WCAG.

## Tecnologias

- Vite 7, React 19 e TypeScript 5;
- Redux Toolkit e React Redux;
- React Router;
- Vitest, Testing Library e jest-axe;
- ESLint com regras de TypeScript, React Hooks e `jsx-a11y`;
- Vercel como destino de publicação.

## Executar localmente

Requer Node.js 20.19+ ou 22.12+.

```bash
npm install
npm run dev
```

Acesse o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

## Qualidade

Execute toda a esteira antes de enviar alterações:

```bash
npm run quality
```

O comando executa, nesta ordem, lint sem tolerância a avisos, verificação estrita de tipos, testes automatizados e build de produção.

| Comando | Finalidade |
| --- | --- |
| `npm run lint` | Qualidade estática e regras de acessibilidade JSX |
| `npm run typecheck` | Verificação estrita do TypeScript |
| `npm run test:run` | Testes unitários e de integração |
| `npm run test:coverage` | Testes com relatório de cobertura |
| `npm run build` | Build otimizado em `dist/` |
| `npm run docs:pdf` | Gera o relatório PDF da atividade |

## Deploy no Vercel

O repositório já contém `vercel.json` para que as rotas da SPA sejam redirecionadas ao `index.html`.

1. Importe este repositório em [vercel.com](https://vercel.com/);
2. Confirme **Framework Preset: Vite**;
3. Use `npm run build` como Build Command e `dist` como Output Directory;
4. Publique e substitua o marcador de link neste README e em `docs/documentacao.md`.

## Documentação

O relatório da atividade está em [docs/documentacao.md](docs/documentacao.md). Ele registra a análise anterior, as decisões de acessibilidade, os testes realizados e os itens manuais que ainda precisam ser validados com NVDA e Lighthouse após a publicação.
