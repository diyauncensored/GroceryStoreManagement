import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
    const navigate = useNavigate();  // Used to redirect after adding the product
    const [product, setProduct] = useState({
        name: "",
        category: "",
        price: "",
        stockStatus: "In Stock",
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send the new product data to the backend
            const response = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });

            if (response.ok) {
                alert("Product added successfully!");
                navigate("/products");  // Redirect to product list page
            } else {
                alert("Failed to add product.");
            }
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    return (
        <div>
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="stockStatus">Stock Status:</label>
                    <select
                        id="stockStatus"
                        name="stockStatus"
                        value={product.stockStatus}
                        onChange={handleChange}
                    >
                        <option value="In Stock">In Stock</option>
                        <option value="Out of Stock">Out of Stock</option>
                    </select>
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;
