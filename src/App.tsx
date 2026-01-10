import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/productsPage/ProductsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
    </Routes>
  );
}

export default App;
