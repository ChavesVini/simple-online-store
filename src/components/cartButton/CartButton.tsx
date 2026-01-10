import { Button } from "../button/Button";
import cartIcon from "../../assets/shopping-cart.png";
import "./CartButton.css";

function CartButton() {
  return (
    <Button variant="icon">
      <img src={cartIcon} className="cart-icon" />
    </Button>
  );
}

export default CartButton;
