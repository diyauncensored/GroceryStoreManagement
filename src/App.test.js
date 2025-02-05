import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders the home page heading", () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    
    const heading = screen.getByText(/Welcome to Grocery Store Management System/i);
    expect(heading).toBeInTheDocument();
});

test("renders navigation links", () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Products/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Product/i)).toBeInTheDocument();
});
