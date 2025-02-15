import React from "react"
import { useEffect } from "react";
import { useState } from "react";

const ProductCard = ({image, title}) =>{
  return(
    <div className="product-card">
      <img src={image} alt={title} className="product-img"/>
      <span>{title}</span>
    </div>
  )
}


const PAZE_SIZE = 10;

function App() {

  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () =>{
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
   
    setProducts(json.products);
  }

  useEffect(() => {
      fetchData();
  }, [])

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAZE_SIZE);
  const start = currentPage * PAZE_SIZE;
  const end = start + PAZE_SIZE;

  const handlePageChange = (n) =>{
      setCurrentPage(n);
  }

  const goToNextPage = () =>{
      setCurrentPage((prev) => prev + 1)
  }

  const goToPrevPage = () =>{
    setCurrentPage((prev) => prev - 1)
  }

  return ( 
    !products.length ? (
    <h1>No data found</h1>
  ) : (
    <div>
    <h1>Pagination</h1>
   
    <div className="products-container">
      {products.slice(start,end).map((p) => (
        <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
      ))}
    </div>

    <div className="pagination-container">
      <button 
      disabled={currentPage === 0}
      className="page-number" onClick={() => goToPrevPage()}>⏮</button>
      {[...Array(noOfPages).keys()].map((n) => (
        <button className={`page-number" ${n === currentPage ? "active" : ""}`} 
        key={n} 
        onClick={() => handlePageChange(n)}
        >
        {n}
        </button>
       
      ))}
       <button
       disabled={currentPage === noOfPages-1}
        className="page-number" onClick={() => goToNextPage()}>⏭</button>
      
    </div>
   

    </div>
  )
  )
   
}

export default App
