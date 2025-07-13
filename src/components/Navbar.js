import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ categories }) => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>News App</h1>
      <ul style={styles.menu}>
        {categories.map((cat) => (
          <li key={cat} style={styles.menuItem}>
            <Link to={`/${cat}`} style={styles.link}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#02ecff",
    color: "black",
  },
  title: {
    fontSize: "1.5rem",
  },
  menu: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
  },
  menuItem: {
    fontSize: "1rem",
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
};

export default Navbar;
