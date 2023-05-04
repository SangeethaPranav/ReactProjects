import React from "react";
import { Card, Button } from "react-bootstrap";
import { CoinRupee } from "tabler-icons-react";

const ProductCard = ({ products }) => {
  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{products.name}</Card.Title>
          <Card.Text>
            <CoinRupee />
            {products.price}
          </Card.Text>
          <Button>Add to cart</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default ProductCard;
