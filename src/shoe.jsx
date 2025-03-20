import React from "react";
import { FaBluesky, FaStar } from "react-icons/fa6";
import img from "./shoe.jpg";
import img2 from "./earphones.jpg";
import img3 from "./watch.jpg";
import img4 from "./iphone.jpg";
import { Link } from "react-router-dom";

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
          <h3 style={styles.name}>{product.name}</h3>
          <p style={styles.text}>Lorem ipsum dolor sit amet 
            consectetur adipisicing elit.</p>
          <p style={styles.price}>Price: ${product.price}</p>
          
          <div style={styles.stars}>
            <FaStar color="gold" size={20} />
            <FaStar color="gold" size={20} />
            <FaStar color="gold" size={20} />
            <FaStar color="gold" size={20} />
            <FaStar color="gold" size={20} />
          </div>

          <Link to='/full'><button style={{...styles.button,
            background:product.id===1?"blue":
            product.id===2?"purple":
            product.id===3?"black":
            product.id===4?"orange":
            "blue"
          }}>Buy Now</button></Link>
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
    backgroundColor: "#D3D3D3",
    boxShadow: "10px 10px 25px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text:{
    color:"grey",
     
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
    fontSize: "20px",
    width: "300px",
    height:"50px"
    
  },
  name:{
    fontSize:"25px",
    fontWeight:"bold",
  }
};

export default ProductCard;