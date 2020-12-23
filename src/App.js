import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardComp from "./components/Card";
import PRODUCTS from "./data/products";
import Navbar from "./components/Navbar";

export default function App() {
  const Products = PRODUCTS.map(item => (
    <div className={`col-sm-6 mb-2`}>
      <CardComp item={item} />
    </div>
  ));

  return (
    <div>
      <div className={"mb-3"}>
        <Navbar />
      </div>
      <div className="container">
        <div className="row">{Products}</div>
      </div>
    </div>
  );
}
