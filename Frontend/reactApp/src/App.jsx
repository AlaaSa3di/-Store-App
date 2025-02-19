import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ title: "", price: "", image: "" });
    const [updatedPrice, setUpdatedPrice] = useState({}); 

    useEffect(() => {
        axios.get("http://localhost:8000/products")
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    const addProduct = () => {
        axios.post("http://localhost:8000/products", newProduct)
            .then(response => setProducts([...products, response.data]))
            .catch(error => console.error("Error adding product:", error));
    };

    const updatePrice = (id) => {
      axios.put(`http://localhost:8000/products/${id}`, { price: updatedPrice[id] })
          .then(response => {
              setProducts(products.map(product => 
                  product.id == id ? { ...product, price: updatedPrice[id] } : product
              ));
          })
          .catch(error => console.error("Error updating product price:", error));
  };

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/products/${id}`)
            .then(() => setProducts(products.filter(product => product.id != id)))
            .catch(error => console.error("Error deleting product:", error));
    };

    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
          <h1>Store Products</h1>
          <div style={{ marginBottom: "20px" }}>
              <input type="text" placeholder="Title" onChange={e => setNewProduct({ ...newProduct, title: e.target.value })} />
              <input type="number" placeholder="Price" onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} />
              <input type="text" placeholder="Image URL" onChange={e => setNewProduct({ ...newProduct, image: e.target.value })} />
              <button onClick={addProduct} style={{ marginLeft: "10px", padding: "5px" }}>Add Product</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
              {products.map(product => (
                  <div 
                  key={product.id} 
                  style={{
                      border: "1px solid #ddd", 
                      borderRadius: "10px", 
                      padding: "15px", 
                      textAlign: "center", 
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      backgroundColor: "#fff",
                      hover: {
                          transform: "scale(1.05)",
                          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)"
                      }
                  }}
              >
                  <img 
                      src={product.image} 
                      alt={product.title} 
                      style={{
                          width: "100px", 
                          height: "100px", 
                          objectFit: "cover", 
                          borderRadius: "8px",
                          marginBottom: "10px"
                      }} 
                  />
                  <h3 style={{ color:"black" ,fontSize: "18px", fontWeight: "600", margin: "10px 0" }}>{product.title}</h3>
                  <p style={{ fontSize: "16px", color: "#333" }}>{product.price} JD</p>
                  <input 
                      type="number" 
                      placeholder="New Price" 
                      onChange={(e) => setUpdatedPrice({ ...updatedPrice, [product.id]: e.target.value })} 
                      style={{
                          padding: "5px",
                          borderRadius: "5px",
                          border: "1px solid #ccc",
                          marginBottom: "10px",
                          width: "80%",
                          textAlign: "center"
                      }}
                  />
                  <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                      <button 
                          onClick={() => updatePrice(product.id)} 
                          style={{
                              backgroundColor: "#4CAF50", 
                              color: "white", 
                              padding: "8px 16px", 
                              border: "none", 
                              borderRadius: "5px",
                              cursor: "pointer",
                              transition: "background-color 0.3s ease"
                          }}
                      >
                          Update Price
                      </button>
                      <button 
                          onClick={() => deleteProduct(product.id)} 
                          style={{
                              backgroundColor: "#f44336", 
                              color: "white", 
                              padding: "8px 16px", 
                              border: "none", 
                              borderRadius: "5px",
                              cursor: "pointer",
                              transition: "background-color 0.3s ease"
                          }}
                      >
                          Delete
                      </button>
                  </div>
              </div>
              
              ))}
          </div>
      </div>
  );
}

export default App;