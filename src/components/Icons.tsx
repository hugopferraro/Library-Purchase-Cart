import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;
const defaults = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8 };

export const BookIcon = (props: IconProps) => (
  <svg {...defaults} {...props} aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z"/></svg>
);

export const CartIcon = (props: IconProps) => (
  <svg {...defaults} {...props} aria-hidden="true"><path d="M3 3h2l2.2 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L20 7H6"/><circle cx="10" cy="20" r="1"/><circle cx="17" cy="20" r="1"/></svg>
);

export const SearchIcon = (props: IconProps) => (
  <svg {...defaults} {...props} aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
);

export const ArrowIcon = (props: IconProps) => (
  <svg {...defaults} {...props} aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
);
