import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/productCard";
import { Products } from "../product";
const Store = () => {
  return (
    <>
      <h1 className="text-center">Welcome to store</h1>
      <Row xs={1} md={3} className="g-5">
        {Products.map((products) => (
          <Col>
            <ProductCard products={products} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Store;
