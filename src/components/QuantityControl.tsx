interface QuantityControlProps {
  title: string;
  quantity: number;
  onChange: (quantity: number) => void;
}

export function QuantityControl({ title, quantity, onChange }: QuantityControlProps) {
  return (
    <div className="quantity-control" aria-label={`Quantidade de ${title}`}>
      <button type="button" onClick={() => onChange(quantity - 1)} aria-label={`Diminuir quantidade de ${title}`}>−</button>
      <span aria-live="polite"><span className="sr-only">Quantidade: </span>{quantity}</span>
      <button type="button" onClick={() => onChange(quantity + 1)} disabled={quantity >= 10} aria-label={`Aumentar quantidade de ${title}`}>+</button>
    </div>
  );
}
