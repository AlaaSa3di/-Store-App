const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

let products = [
    { id: 1, title: "Milk", price: 2.99, image: "https://cdn.theatlantic.com/thumbor/GCqfW0ynNbC6W-zNYako3g_vVlo=/451x36:1531x1116/1080x1080/media/img/mt/2024/10/Atlantic_Milk_2000x1125/original.jpg" },
    { id: 2, title: "Bread", price: 2.00, image: "https://static01.nyt.com/images/2024/10/08/multimedia/13EATrex-LD-briocherex-blfk/13EATrex-LD-briocherex-blfk-jumbo.jpg" }
];

app.get("/", (request, response) => {
    response.send("Welcome to home 🏠");
  });
  
app.get("/products", (req, res) => {
    res.json(products);
});

app.post("/products", (req, res) => {
    const { title, price, image } = req.body;
    if (!title || !price || !image) {
        return res.status(400).json({ message: "All fields are required" });
    }
    
    const newProduct = {
        id: products.length + 1,
        title,
        price,
        image
    };

    products.push(newProduct);
    res.json(newProduct);
});

app.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const { price } = req.body;

    let product = products.find(p => p.id == id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    product.price = price;
    res.json({ message: "Product price updated successfully", product });
});

app.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    products = products.filter(product => product.id != id); 
    res.json({ message: `Product ${id} deleted successfully` });
});

app.listen(PORT, () => console.log(`🚀Server running on port ${PORT}`));
