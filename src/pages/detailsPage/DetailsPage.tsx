import { useState } from "react";
import { Button } from "../../components/button/Button";
import "./DetailsPage.css";

interface DetailsPageProps {
  product: {
    id: number;
    image: string;
    name: string;
    description: string;
    value: number;
  };
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
    onAddToCart(count);
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
          <p>Quantity</p>
          <div className="counter">
            <Button onClick={decrement} backgroundColor="transparent" color="#0D0502">-</Button>
            <span>{count}</span>
            <Button onClick={increment} backgroundColor="transparent" color="#0D0502">+</Button>
          </div>
          <div className="actions-buttons">
            <Button onClick={closeModal} backgroundColor="#85685A" color="#ECF8D4"> See More Products </Button>
            <Button onClick={registerNumberOfItems} backgroundColor="#85685A" color="#ECF8D4"> Add to Cart </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;