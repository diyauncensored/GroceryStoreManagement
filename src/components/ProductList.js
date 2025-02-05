import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
    const [products, setProducts] = useState([]);
    
    // Fetch products from MongoDB or API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Replace with your backend API call to fetch products
                const response = await fetch("/api/products");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product._id}>
                            <span>{product.name}</span> - {product.category} - ${product.price}
                            <div>
                                <Link to={`/edit-product/${product._id}`}>Edit</Link> | 
                                <button className="delete" onClick={() => handleDelete(product._id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

// Example delete function (this would call an API to remove a product from MongoDB)
const handleDelete = async (id) => {
    try {
        const response = await fetch(`/api/products/${id}`, {
            method: "DELETE",
        });
        if (response.ok) {
            alert("Product deleted successfully!");
            window.location.reload(); // Reload to update the list
        } else {
            alert("Failed to delete the product.");
        }
    } catch (error) {
        console.error("Error deleting product:", error);
    }
};

export default ProductList;
