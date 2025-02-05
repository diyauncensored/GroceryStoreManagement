import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
    const { id } = useParams();  // Get product ID from URL
    const navigate = useNavigate();  // Used to redirect after update
    const [product, setProduct] = useState({
        name: "",
        category: "",
        price: "",
        stockStatus: "In Stock"
    });

    // Fetch the product details based on the product ID
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // Replace with your backend API call to fetch product details by ID
                const response = await fetch(`/api/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send the updated product data to the backend
            const response = await fetch(`/api/products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });

            if (response.ok) {
                alert("Product updated successfully!");
                navigate("/products");  // Redirect to product list page
            } else {
                alert("Failed to update product.");
            }
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <div>
            <h2>Edit Product</h2>
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
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
}

export default EditProduct;
