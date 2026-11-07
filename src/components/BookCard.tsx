import { useState } from 'react';
import type { Book } from '../types/book';
import { formatCurrency } from '../utils/currency';
import { addToCart } from '../store/cartSlice';
import { useAppDispatch } from '../store/hooks';

interface BookCardProps {
  book: Book;
  onAnnounce: (message: string) => void;
}

export function BookCard({ book, onAnnounce }: BookCardProps) {
  const dispatch = useAppDispatch();
  const [imageFailed, setImageFailed] = useState(false);

  const handleAdd = () => {
    dispatch(addToCart(book));
    onAnnounce(`${book.title} foi adicionado ao carrinho.`);
  };

  return (
    <article className="book-card">
      <div className="cover-wrap">
        {imageFailed ? (
          <div className="cover-fallback" role="img" aria-label={book.coverAlt}>
            <span>{book.title}</span><small>{book.author}</small>
          </div>
        ) : (
          <img
            src={book.coverUrl}
            alt={book.coverAlt}
            loading="lazy"
            width="240"
            height="360"
            onError={() => setImageFailed(true)}
          />
        )}
        {book.featured && <span className="featured-label">Destaque</span>}
      </div>
      <div className="book-details">
        <p className="eyebrow">{book.category}</p>
        <h2>{book.title}</h2>
        <p className="author">por {book.author}</p>
        <p className="description">{book.description}</p>
        <div className="card-action">
          <p className="price"><span className="sr-only">Preço: </span>{formatCurrency(book.price)}</p>
          <button className="button button-primary" type="button" onClick={handleAdd} aria-label={`Adicionar ${book.title} ao carrinho`}>
            Adicionar
          </button>
        </div>
      </div>
    </article>
  );
}
