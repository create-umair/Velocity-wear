const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Product = require("./models/Product");

const app = express();

app.use(cors());
app.use(express.json());

// CONNECT DATABASE
connectDB();

// SEED DATA (only runs once)
const seedProducts = async () => {
  const count = await Product.countDocuments();

  if (count === 0) {
    await Product.insertMany([
      {
        name: "Velocity Runner",
        price: 120,
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
      },
      {
        name: "Training Hoodie",
        price: 85,
        category: "Clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
      }
    ]);

    console.log("Products seeded");
  }
};

seedProducts();

// GET PRODUCTS FROM DATABASE
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});