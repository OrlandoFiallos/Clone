import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Header";
import Home from "./Home";
import Products from "./Products";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
