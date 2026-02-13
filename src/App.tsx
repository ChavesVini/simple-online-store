import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BuyPage from "./pages/buyPage/BuyPage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import { Slide, ToastContainer } from "react-toastify";
import type { CartItem } from "./types/cartItem";
import type { Product } from "./types/product";

function App() {
  const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product, quantity: number) => {
    setCartProducts(prev => {
      const existingItem = prev.find(
        item => item.product.id === product.id
      );

      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { product, quantity }];
    });
  };
  
  const updateQuantity = (productId: number, quantity: number) => {
    setCartProducts(prev =>
      prev
        .map(item =>
          item.product.id === productId
            ? { ...item, quantity }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  return (
    <>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <Routes>
        <Route path="/" element={<ProductsPage cartProducts={cartProducts} onAddToCart={handleAddToCart} /> } />
        <Route path="/buy" element={<BuyPage product={cartProducts} onUpdateQuantity={updateQuantity}/>} />
      </Routes>
    </>
  );
}

export default App;
