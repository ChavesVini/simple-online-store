import type { CartItem } from "../../App";
import "./BuyPage.css";

interface BuyPageProps {
  product: CartItem[];
}

function BuyPage({ product }: BuyPageProps) {
  return (
    <div className="container-buy-page">
      <div className="product-info">
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
              <span>{item.quantity}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyPage;