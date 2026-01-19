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
  onClose: () => void;
}

function DetailsPage({ product, onClose }: DetailsPageProps) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="close-button">
          <Button backgroundColor="#0D0502" onClick={onClose}>✕</Button>
        </div>
        <h2>{product.id}</h2>
        <p>{product.name}</p>
        <img src={product.image} alt={product.name} className="product-image" />
        <p>{product.description}</p>
        <strong>${product.value}.00</strong>
        <p> Quantity </p>
        <Button onClick={decrement} backgroundColor="transparent" color="#0D0502">-</Button>
        {count}
        <Button onClick={increment} backgroundColor="transparent" color="#0D0502">+</Button>
      </div>
    </div>
  );
}

export default DetailsPage;