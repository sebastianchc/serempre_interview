import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import ProductState from './context/ProductState';

function App() {
  return (
    <ProductState>
      <Header />
      <Main />
    </ProductState>
  );
}

export default App;
