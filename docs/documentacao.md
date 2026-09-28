# Documentação do Projeto — Carrinho de Compras de Livraria

## 1. Identificação

- **Projeto:** Carrinho de Compras de Livraria
- **Atividade:** Parada Obrigatória 1
- **Disciplina:** Desenvolvimento Full Stack
- **Repositório:** [github.com/hugopferraro/Library-Purchase-Cart](https://github.com/hugopferraro/Library-Purchase-Cart)

## 2. Descrição do projeto

Este projeto consiste em uma aplicação React que implementa um carrinho de compras para uma livraria virtual. A aplicação permite visualizar uma lista de livros, adicionar produtos ao carrinho, consultar os itens adicionados e removê-los.

O estado global do carrinho é gerenciado com Redux. A integração entre o Redux e os componentes React é realizada pelo React Redux, enquanto o React Router DOM permite a navegação entre a página de produtos e a página do carrinho sem recarregar a aplicação.

## 3. Tecnologias utilizadas

- React;
- Redux;
- React Redux;
- React Router DOM;
- JavaScript;
- HTML.

## 4. Principais funcionalidades

### 4.1. Exibição dos produtos

A rota principal (`/`) apresenta os livros disponíveis para compra. Cada produto possui um botão **Add to Cart**, responsável por iniciar a adição do livro ao carrinho.

### 4.2. Adição de produtos ao carrinho

Ao clicar em **Add to Cart**, o componente `ProductList` envia ao Redux uma ação do tipo `ADD_TO_CART`. O produto selecionado é incluído no array `cart`, armazenado no estado global da aplicação.

![Página inicial com os produtos disponíveis](<./images/Captura de tela 2026-09-28 195149.png>)

### 4.3. Exibição dos itens adicionados

O link **View Cart** direciona o usuário para a rota `/cart`. Nessa página, o componente `Cart` consulta o estado global por meio do `useSelector` e apresenta os produtos adicionados.

![Apresentação do carrinho](<./images/Captura de tela 2026-09-28 195832.png>)

**Arquivo sugerido:** `docs/imagens/02-exibir-carrinho.png`

### 4.4. Remoção de produtos do carrinho

Na página do carrinho, cada produto possui um botão **Remove**. Ao acioná-lo, o componente envia ao Redux uma ação do tipo `REMOVE_FROM_CART`, removendo o produto selecionado do estado global.

![Apresentação do carrinho](<./images/Captura de tela 2026-09-28 200015.png>)

![Apresentação do carrinho](<./images/Captura de tela 2026-09-28 200128.png>)

**Arquivo sugerido:** `docs/imagens/03-remover-produto.png`

## 5. Sequência lógica de utilização

1. O usuário acessa a rota principal da aplicação;
2. A aplicação exibe os livros disponíveis;
3. O usuário clica em **Add to Cart** para adicionar um livro;
4. O Redux atualiza o estado global do carrinho;
5. O usuário seleciona **View Cart**;
6. A aplicação exibe os produtos armazenados no carrinho;
7. O usuário pode clicar em **Remove** para retirar um produto;
8. O Redux atualiza novamente o estado, e a interface deixa de exibir o item removido;
9. O usuário pode selecionar **Back to Products** para retornar à lista de livros.

## 6. Gerenciamento de estado

O estado inicial da aplicação contém um array chamado `cart`. O reducer trata as seguintes ações:

- `ADD_TO_CART`: cria um novo estado contendo o produto adicionado;
- `REMOVE_FROM_CART`: cria um novo estado sem o produto removido.

O `Provider` disponibiliza a store do Redux para todos os componentes da aplicação. O hook `useDispatch` permite enviar ações, enquanto o hook `useSelector` permite consultar os produtos presentes no carrinho.

## 7. Rotas da aplicação

| Rota | Descrição |
| --- | --- |
| `/` | Exibe a lista de produtos disponíveis. |
| `/cart` | Exibe os produtos adicionados ao carrinho. |

## 8. Links do projeto

- **Repositório GitHub:** [https://github.com/hugopferraro/Library-Purchase-Cart](https://github.com/hugopferraro/Library-Purchase-Cart)
- **Aplicação publicada:** [INSERIR LINK DA APLICAÇÃO PUBLICADA]

## 9. Conclusão

A aplicação desenvolvida demonstra o uso de componentes React, gerenciamento de estado global com Redux e navegação com React Router DOM. O fluxo implementado permite adicionar, visualizar e remover produtos do carrinho de compras, atendendo às funcionalidades solicitadas na atividade.
