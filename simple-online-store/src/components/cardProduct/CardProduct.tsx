import { Button } from "../button/Button";
import "./CardProduct.css";

interface CardProductProps {
  image: string;
  nameProduct: string;
  description: string;
  value: number;
};

function CardProduct({ image, nameProduct, description, value }: CardProductProps) {
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
        <Button title="Select" ></Button>
    </div>
  );
}

export default CardProduct;