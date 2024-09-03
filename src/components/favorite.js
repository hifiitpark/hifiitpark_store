import React from "react";
import { Grid, Typography, Box, Container, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';



function Favorite({ likedProducts, onAddToCart, onLikeToggle }) {

  const handleBuyNow = (product) => {
    if (product.inStock) {
      // Handle buy now logic, e.g., navigate to checkout
    } else {
      alert(`${product.name} is out of stock!`);
    }
  };

  const handleAddToCart = (product) => {
    if (!onAddToCart) {
      console.error('onAddToCart function is not passed as a prop.');
      return;
    }

    if (product.inStock) {
      if (!product.isAddedToCart) {
        onAddToCart(product);
        alert(`${product.name} has been added to your cart.`);
      } else {
        alert(`${product.name} is already in your cart.`);
      }
    } else {
      alert(`${product.name} is out of stock!`);
    }
  };

  return (
    <Container>
      <Box sx={{ p: 2, mt: 13 }}>
        <Typography
          variant="h4"
          gutterBottom
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Your Liked Products
        </Typography>
        {likedProducts.length > 0 ? (
          <Grid container spacing={2}>
            {likedProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    border: "2px solid #e0e0e0",
                    padding: "10px",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ maxWidth: "50%", height: "auto" }}
                  />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {product.name} <br />ML: {product.ml}<br />
                    <CurrencyRupeeIcon style={{paddingTop:"-10px", fontSize:"15px"}}/>
                    {product.price}/- 
                  </Typography>
                  <div style={{ marginTop: "10px" }}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={() => handleBuyNow(product)}
                      component={Link}
                      to="/address"
                      style={{ marginRight: "10px" }}
                    >
                      Buy Now
                    </Button>
                    <Button 
                      variant="contained" 
                      color="secondary" 
                      onClick={() => handleAddToCart(product)}
                    >
                      Add Cart
                    </Button>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body1">No liked products</Typography>
        )}
      </Box>
    </Container>
  );
}

export default Favorite;
