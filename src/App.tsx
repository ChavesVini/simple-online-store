import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/productsPage/ProductsPage";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;
