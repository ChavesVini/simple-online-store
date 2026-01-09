import { Button } from "../button/Button";
import cartIcon from "../../assets/shopping-cart.png";
import "./CartButton.css";

function CartButton() {
  return (
    <Button variant="icon">
      <img src={cartIcon} alt="Add to cart" />
    </Button>
  );
}

export default CartButton;
