import { useState } from "react";
import { Button } from "../../components/button/Button";
import "./DetailsPage.css";
import { toast } from 'react-toastify';
import type { Product } from "../productsPage/ProductsPage";

interface DetailsPageProps {
  product: Product;
  closeModal: () => void;
  onAddToCart: (quantity: number) => void;
}

function DetailsPage({ product, closeModal, onAddToCart }: DetailsPageProps) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const registerNumberOfItems = () => {
    if (count === 0) {
      toast.warning("Select at least 1 item");
      return;
    }

    onAddToCart(count);
    toast.success("Added to cart!");
    closeModal();
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-header">
          <Button backgroundColor="#0D0502" onClick={closeModal}>✕</Button>
        </div>

        <div className="modal-body">
          <h2>Id: {product.id}</h2>
          <p>Name: {product.name}</p>
          <img src={product.image} alt={product.name} className="product-image" />
          <p>Description: Lorem ipsum dolor sit amet...</p>
          <p>Value: ${product.value}.00</p>
        </div>

        <div className="modal-footer">
          <div className="footer-wrapper">
            <div className="counter-wrapper">
              <p>Quantity</p>
              <div className="counter">
                <Button onClick={decrement} backgroundColor="transparent" color="#0D0502">-</Button>
                <span>{count}</span>
                <Button onClick={increment} backgroundColor="transparent" color="#0D0502">+</Button>
              </div>
            </div>
            <div className="actions-buttons">
              <Button onClick={closeModal} backgroundColor="#85685A" color="#ECF8D4"> See More Products </Button>
              <Button onClick={registerNumberOfItems} backgroundColor="#85685A" color="#ECF8D4"> Add to Cart </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;