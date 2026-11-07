import { useMemo, useState } from 'react';
import { BookCard } from '../components/BookCard';
import { SearchIcon } from '../components/Icons';
import { books, categories } from '../data/books';

export function CatalogPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Todos');
  const [announcement, setAnnouncement] = useState('');

  const filteredBooks = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR');
    return books.filter((book) => {
      const matchesCategory = category === 'Todos' || book.category === category;
      const matchesQuery = !normalizedQuery || `${book.title} ${book.author}`.toLocaleLowerCase('pt-BR').includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div>
            <p className="kicker">Uma livraria feita para você</p>
            <h1 id="hero-title">Histórias que abrem novos caminhos.</h1>
            <p className="hero-copy">Descubra clássicos e novos mundos em uma experiência simples, acolhedora e acessível.</p>
            <a className="button button-light" href="#catalogo">Explorar catálogo <span aria-hidden="true">↓</span></a>
          </div>
          <blockquote>
            <span className="quote-mark" aria-hidden="true">“</span>
            <p>Um livro é um sonho que você segura nas mãos.</p>
            <cite>— Neil Gaiman</cite>
          </blockquote>
        </div>
      </section>

      <section className="catalog-section" id="catalogo" aria-labelledby="catalog-title">
        <div className="container">
          <div className="section-heading">
            <div><p className="kicker dark">Nossa curadoria</p><h2 id="catalog-title">Encontre sua próxima leitura</h2></div>
            <p>Uma seleção especial para diferentes leitores e momentos.</p>
          </div>

          <form className="filters" role="search" onSubmit={(event) => event.preventDefault()}>
            <div className="field search-field">
              <label htmlFor="book-search">Buscar no catálogo</label>
              <div><SearchIcon /><input id="book-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Título ou autor" /></div>
            </div>
            <div className="field category-field">
              <label htmlFor="category">Categoria</label>
              <select id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
                {categories.map((item) => <option key={item}>{item}</option>)}
              </select>
            </div>
          </form>

          <p className="results-count" aria-live="polite">
            {filteredBooks.length} {filteredBooks.length === 1 ? 'livro encontrado' : 'livros encontrados'}
          </p>
          {filteredBooks.length ? (
            <div className="book-grid">
              {filteredBooks.map((book) => <BookCard key={book.id} book={book} onAnnounce={setAnnouncement} />)}
            </div>
          ) : (
            <div className="empty-results"><h2>Nenhum livro encontrado</h2><p>Tente buscar por outro título, autor ou categoria.</p></div>
          )}
          <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">{announcement}</div>
        </div>
      </section>
    </>
  );
}
