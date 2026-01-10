import "./DetailsPage.css";

interface DetailsPageProps {
  product: any;
  onClose: () => void;
}

function DetailsPage({ product, onClose }: DetailsPageProps) {
  return (
    <div className="overlay">
      <div className="modal">
        <button onClick={onClose}>✕</button>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <strong>R$ {product.value}</strong>
      </div>
    </div>
  );
}

export default DetailsPage;