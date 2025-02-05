import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import About from "./components/About"; // New About page component
import Contact from "./components/Contact"; // New Contact page component
import Footer from "./components/Footer"; // New Footer component
import "./App.css";

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/products">Products</Link> | 
                <Link to="/add-product">Add Product</Link> | 
                <Link to="/about">About</Link> |  {/* New About page link */}
                <Link to="/contact">Contact</Link>  {/* New Contact page link */}
            </nav>

            <div className="container">
                <Routes>
                    <Route path="/" element={<h1>Welcome to Grocery Store Management System</h1>} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/add-product" element={<AddProduct />} />
                    <Route path="/edit-product/:id" element={<EditProduct />} />
                    <Route path="/about" element={<About />} />  {/* New About page route */}
                    <Route path="/contact" element={<Contact />} />  {/* New Contact page route */}
                </Routes>
            </div>

            <Footer /> {/* Footer to be displayed on all pages */}
        </Router>
    );
}

export default App;
