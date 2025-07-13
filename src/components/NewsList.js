import React, { useEffect, useState } from "react";

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = "0b274f4a94694b6d9ead81c3c50b882d"; // Replace with your API key
      const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{category.charAt(0).toUpperCase() + category.slice(1)} News</h2>
      <div style={styles.grid}>
        {articles.map((article, index) => (
          <div key={index} style={styles.card}>
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} style={styles.image} />}
            <h3 style={styles.title}>{article.title}</h3>
            <p style={styles.description}>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "20px", maxWidth: "1200px", margin: "0 auto" },
  heading: { fontSize: "2rem", marginBottom: "20px" },
  grid: { display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" },
  card: { padding: "15px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", backgroundColor: "#fff", overflow: "hidden", textAlign: "left" },
  image: { width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px 8px 0 0" },
  title: { fontSize: "1.25rem", margin: "15px 0 10px" },
  description: { fontSize: "1rem", color: "#555", marginBottom: "10px" },
  link: { color: "#1e90ff", textDecoration: "none", fontWeight: "bold" },
};

export default NewsList;
