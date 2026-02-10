import type { CartItem } from "../../App";
import { Button } from "../../components/button/Button";
import "./BuyPage.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

interface BuyPageProps {
  product: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
}

function BuyPage({ product, onUpdateQuantity }: BuyPageProps) {  
  const navigate = useNavigate();
  
  const increment = (item: CartItem) => {
    onUpdateQuantity(item.product.id, item.quantity + 1);
  };

  const decrement = (item: CartItem) => {
    if (item.quantity > 0) {
      onUpdateQuantity(item.product.id, item.quantity - 1);
    }
  };

  const placeOrder = () => {
    toast.success("You ordered " + numberOfItems + " items, with a value of US$ " + totalValue + ",00");
    product.forEach(item => onUpdateQuantity(item.product.id, 0));
  }

  const cancelOrder = () => {
    product.forEach(item => onUpdateQuantity(item.product.id, 0));
    navigate("/");
  }

  const numberOfItems = product.reduce((total, item) => total + item.quantity, 0);
  const totalValue = product.reduce((total, item) => total + (item.product.value * item.quantity), 0);

  return (
    <div className="container-buy-page">
      <div className="product-info" v-if={product.length === 0}>
        {product.map(item => (
          <div className="cart-item" key={item.product.id}>
            <div className="cart-item-info">
              <span className="cart-item-id">
                {item.product.id}
              </span>
              <h3>{item.product.name}</h3>
              <p>{item.product.description}</p>
              <strong>
                US$ {item.product.value},00
              </strong>
            </div>

            <div className="cart-item-quantity">
              <Button onClick={() => decrement(item)} backgroundColor="transparent" color="#0D0502">-</Button>
              <span>{item.quantity}</span>
              <Button onClick={() => increment(item)} backgroundColor="transparent" color="#0D0502">+</Button>
            </div>
          </div>
        ))}
      </div>
      <div className="resume">
        <span className="text-resume">Resume</span>
        <span className="value">US$ {totalValue},00</span>
      </div>
      <div className="resume-actions">
        <Button onClick={() => navigate("/")}>See More Products</Button>
        <Button onClick={() => placeOrder()}>Place Order</Button>
        <Button onClick={() => cancelOrder()}>Cancel Order</Button>
      </div>
    </div>
  );
}

export default BuyPage;