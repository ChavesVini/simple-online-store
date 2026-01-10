import CardProduct from "../components/cardProduct/CardProduct";
import CartButton from "../components/cartButton/CartButton";
import "./ProductsPage.css";
import cartIcon from "../assets/cart-full.png";

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
];

function ProductsPage() {
  return (
    <div className="container-card-product">
      <div className="cart-button">
        <CartButton />
      </div>
      <p className="header-product"> 
        Products 
      </p>
      <div className="products">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            image={product.image}
            nameProduct={product.name}
            description={product.description}
            value={product.value}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;