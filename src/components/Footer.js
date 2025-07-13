import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p>© 2024 News App. All rights reserved.</p>
        <ul style={styles.footerLinks}>
          <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
          <li><a href="/terms" style={styles.link}>Terms of Service</a></li>
          <li><a href="/contact" style={styles.link}>Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: "20px",
    backgroundColor: "#a3d3d7",
    color: "white",
    textAlign: "center",
    marginTop: "20px",
  },
  footerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  footerLinks: {
    listStyleType: "none",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Footer;
