import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const products = [
  { id: 1, name: 'Book 1' },
  { id: 2, name: 'Book 2' }
];

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ProductList products={products} />
        </Route>
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default App;
