import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";
import { PAGE_SIZE } from "./constant";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=200");
    const data = await res.json();
    setProducts(data.products);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return !products.length ? (
    <div>No product item</div>
  ) : (
    <>
      <div className="pagination-header">Pagination</div>
      <div className="product-card-container">
        {products.slice(start, end).map((p) => (
          <ProductCard key={p.id} img={p.thumbnail} title={p.title} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
}

export default App;
