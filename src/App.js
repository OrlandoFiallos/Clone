import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Header";
import Products from "./Products";
import { HashRouter, Route } from "react-router-dom";
import Product from "./Components/Product";

function App() {
  return (
    <div className="app">
      <Header />
      <HashRouter>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
