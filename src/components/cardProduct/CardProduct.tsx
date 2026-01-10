import { Button } from "../button/Button";
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
    <div className="card-product" onClick={onSelect}>
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
        onClick={() => console.log("clicou")}
      />
    </div>
  );
}

export default CardProduct;