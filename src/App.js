import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import About from "./components/About"; 
import Footer from "./components/Footer"; 
import Chatbot from "./components/Chatbot";  // Import Chatbot component
import "./App.css";

function App() {
    return (
        <Router>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/add-product">Add Product</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="container">
                <Routes>
                    <Route path="/" element={<h1>Grocery Store Inventory</h1>} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/add-product" element={<AddProduct />} />
                    <Route path="/edit-product/:id" element={<EditProduct />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>

            <Chatbot />  {/* Add Chatbot Component */}

            <Footer />
        </Router>
    );
}

export default App;
