import { Button } from "../button/Button";
import cartIcon from "../../assets/shopping-cart.png";
import "./CartButton.css";

interface CartButtonProps {
  onClick: () => void;
};


function CartButton({ onClick }: CartButtonProps) {
  return (
    <Button variant="icon" onClick={onClick}>
      <img src={cartIcon} className="cart-icon" />
    </Button>
  );
}

export default CartButton;
