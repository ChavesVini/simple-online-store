import { Button } from "../ui/button/Button";
import "./CardProduct.css";

interface CardProductProps {
  image: string;
  nameProduct: string;
  description: string;
  value: number;
  onSelect?: () => void;
};

function CardProduct({ image, nameProduct, description, value, onSelect }: CardProductProps) {
  return (
    <div className="card-product">
      <img src={image} alt={nameProduct} className="product-image" />
      <p className="name-product"> {nameProduct}</p>
      <p className="description"> {description}</p>
      <p className="value">   
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(value)}
      </p>
      <Button 
        title="Select"
        backgroundColor="#0D0502"
        onClick={onSelect}
      />
    </div>
  );
}

export default CardProduct;