import CardProduct from "../../components/cardProduct/CardProduct";
import "./ProductsPage.css";
import cartIcon from "../../assets/cart-full.png";
import DetailsPage from "../detailsPage/DetailsPage";
import { useState } from "react";

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

  return (
    <div className="container-card-product">
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
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default ProductsPage;