import React, { useState, useEffect } from 'react';

const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products from the Fake Store API when the component mounts
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  // Update filtered products based on search term
  useEffect(() => {
    setFilteredProducts(
      products
        .filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 20) // Limit to 20 items
    );
  }, [searchTerm, products]);

  return (
    <div>
      <h2>Product Search</h2>
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} width="50" height="50" />
              </td>
              <td>{product.title}</td>
              <td>${product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductSearch;
