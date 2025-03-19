import React from "react";
import { FaBluesky, FaStar } from "react-icons/fa6";
import img from "./shoe.jpg";
import img2 from "./earphones.jpg";
import img3 from "./watch.jpg";
import img4 from "./iphone.jpg";

const products = [
  { id: 1, name: "Shoes", price: 100.0, image: img },
  { id: 2, name: "Earphone", price: 40.0, image: img2 },
  { id: 3, name: "Watch", price: 70.84, image: img3 },
  { id: 4, name: "Mobile", price: 1000.84, image: img4 },
];

const ProductCard = () => {
  return (
    <div style={styles.container}>
      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={product.image} alt={product.name} style={styles.image} />
          <h3>{product.name}</h3>
          <p style={styles.price}>Price: ${product.price}</p>
          
          <div style={styles.stars}>
            <FaStar color="gold" size={20} />
            <FaStar color="gold" size={20} />
            <FaStar color="gold" size={20} />
            <FaStar color="gold" size={20} />
            <FaStar color="gold" size={20} />
          </div>

          <button style={styles.button}>Buy Now</button>
        </div>
      ))}
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    padding: "30px",
    flexWrap: "wrap",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "15px",
    padding: "20px",
    width: "300px",
    height: "420px", 
    textAlign: "center",
    backgroundColor: "white",
    boxShadow: "4px 4px 15px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: "120px",
    height: "120px",
    objectFit: "cover",
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  stars: {
    display: "flex",
    gap: "5px",
  },
  button: {
    background: "blue",
    color: "white",
    padding: "8px 12px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    
  },
};

export default ProductCard;