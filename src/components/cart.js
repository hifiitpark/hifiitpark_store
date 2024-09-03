import React, { useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

const ProductList = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Typography variant="h4">Products</Typography>
      {products.map((product) => (
        <Card key={product.id} style={{ marginBottom: "10px" }}>
          <CardContent>
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="body1">Price: ${product.price}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
      <Cart cart={cart} />
    </div>
  );
};

const Cart = ({ cart }) => (
  <div>
    <Typography variant="h5">Cart</Typography>
    {cart.length === 0 ? (
      <Typography variant="body1">Cart is empty</Typography>
    ) : (
      cart.map((item, index) => (
        <Typography key={index} variant="body1">
          {item.name} - ${item.price}
        </Typography>
      ))
    )}
  </div>
);

export default ProductList;
