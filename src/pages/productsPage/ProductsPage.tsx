import CardProduct from "../../components/cardProduct/CardProduct";
import "./ProductsPage.css";
import cartIcon from "../../assets/cart-full.png";
import DetailsPage from "../detailsPage/DetailsPage";
import { useState } from "react";
import CartButton from "../../components/cartButton/CartButton";
import { useNavigate } from "react-router-dom";
import type { CartItem } from "../../App";

export type Product = {
  id: number;
  image: string;
  name: string;
  description: string;
  value: number;
};

const products = [
  {
    id: 1,
    image: cartIcon,
    name: "Product 1",
    description: "Lorem Ipsum",
    value: 32,
  },
  {
    id: 2,
    image: cartIcon,
    name: "Product 2",
    description: "Lorem Ipsum",
    value: 45,
  },
  {
    id: 3,
    image: cartIcon,
    name: "Product 3",
    description: "Lorem Ipsum",
    value: 6,
  },
  {
    id: 4,
    image: cartIcon,
    name: "Product 4",
    description: "Lorem Ipsum",
    value: 12,
  },
  {
    id: 5,
    image: cartIcon,
    name: "Product 5",
    description: "Lorem Ipsum",
    value: 98,
  },
  {
    id: 6,
    image: cartIcon,
    name: "Product 6",
    description: "Lorem Ipsum",
    value: 109,
  }
];

interface ProductsPageProps {
  cartProducts: CartItem[];
  onAddToCart: (product: Product, quantity: number) => void;
}

function ProductsPage({ cartProducts, onAddToCart }: ProductsPageProps) {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const totalItems = cartProducts.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="container-card-product">
      <div className="header-cart-items">
        <p>
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </p>
        <CartButton onClick={() => navigate("/buy")}/>
      </div>
      <p className="header-product">Products</p>

      <div className="products">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            image={product.image}
            nameProduct={product.name}
            description={product.description}
            value={product.value}
            onSelect={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <DetailsPage
          product={selectedProduct}
          closeModal={() => setSelectedProduct(null)}
          onAddToCart={(quantity) =>
            onAddToCart(selectedProduct, quantity)
          }
        />
      )}
    </div>
  );
}

export default ProductsPage;