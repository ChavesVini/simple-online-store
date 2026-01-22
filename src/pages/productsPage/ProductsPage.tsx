import CardProduct from "../../components/cardProduct/CardProduct";
import "./ProductsPage.css";
import cartIcon from "../../assets/cart-full.png";
import DetailsPage from "../detailsPage/DetailsPage";
import { useState } from "react";
import CartButton from "../../components/cartButton/CartButton";

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

function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [cartItems, setCartItems] = useState<number>(
    Number(localStorage.getItem("cart")) || 0
  );

  const handleAddToCart = (quantity: number) => {
    setCartItems(prev => {
      const total = prev + quantity;
      localStorage.setItem("cart", total.toString());
      return total;
    });
  };

  return (
    <div className="container-card-product">
      <div className="header-cart-items">
        <p> {cartItems ? cartItems : 0} {cartItems === 1 ? "item" : "items"} </p>
        <CartButton/>
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
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}

export default ProductsPage;