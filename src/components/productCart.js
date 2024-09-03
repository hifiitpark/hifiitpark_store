// import React, { useState } from "react";
// import {
//   List,
//   ListItem,
//   ListItemText,
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Button,
// } from "@mui/material";
// import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

// const ProductCart = ({ cartItems }) => {
//   const [cartItems1, setCartItems1] = useState(cartItems);

//   const handleRemoveItem = (id) => {
//     setCartItems1(cartItems.filter((item) => item.id !== id));
//   };

//   return (
//     <Container>
//       <Grid mt={10}>
//         <Typography
//           style={{ textAlign: "center", fontWeight: "bold" }}
//           variant="h4"
//         >
//           Product Details
//         </Typography>
//         <Box>
//           <List>
//             {cartItems1.length > 0 ? (
//               cartItems1.map((item) => (
//                 <ListItem
//                   key={item.id} // assuming each item has a unique `id`
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     padding: 1,
//                     border: "1px solid #e0e0e0",
//                     margin: 1,
//                   }}
//                 >
//                   <Box
//                     component="img"
//                     src={item.image}
//                     alt={item.name}
//                     sx={{
//                       maxWidth: 250,
//                       height: 250,
//                       objectFit: "cover",
//                       marginRight: 2,
//                     }}
//                   />

//                   <ListItemText
//                     primary={item.name}
//                     secondary={
//                       <span>
//                         Price: <CurrencyRupeeIcon sx={{ fontSize: 16 }} />{" "}
//                         {item.price}
//                         <Typography>Qty: 1</Typography>
//                       </span>
//                     }
//                   />

//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "space-between",
//                       height: "100%", // Adjust this to match the image height
//                     }}
//                   >
//                     <Button
//                       variant="contained"
//                       color="secondary"
//                       sx={{ alignSelf: "flex-start", marginBottom: 1 }}
//                       onClick={() => handleRemoveItem(item.id)}
//                     >
//                       Remove
//                     </Button>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       sx={{ alignSelf: "flex-end" }}
//                     >
//                       Edit
//                     </Button>
//                   </Box>
//                 </ListItem>
//               ))
//             ) : (
//               <Typography variant="body2" textAlign="center" mt={2}>
//                 No items in cart
//               </Typography>
//             )}
//           </List>
//         </Box>
//       </Grid>
//     </Container>
//   );
// };

// export default ProductCart;

import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  Container,
  Grid,
  Button,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const ProductCart = ({ cartItems, handleRemoveItem }) => {
  return (
    <Container>
      <Grid mt={10}>
        <Typography
          style={{ textAlign: "center", fontWeight: "bold" }}
          variant="h4"
        >
          Product Details
        </Typography>
        <Box>
          <List>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <ListItem
                  key={item.id} // assuming each item has a unique `id`
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: 1,
                    border: "1px solid #e0e0e0",
                    margin: 1,
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      maxWidth: 250,
                      height: 250,
                      objectFit: "cover",
                      marginRight: 2,
                    }}
                  />

                  <ListItemText
                    primary={item.name}
                    secondary={
                      <span>
                        Price: <CurrencyRupeeIcon sx={{ fontSize: 16 }} />{" "}
                        {item.price}
                        <Typography>Qty: 1</Typography>
                      </span>
                    }
                  />

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%", // Adjust this to match the image height
                    }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ alignSelf: "flex-start", marginBottom: 1 }}
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ alignSelf: "flex-end" }}
                    >
                      Edit
                    </Button>
                  </Box>
                </ListItem>
              ))
            ) : (
              <Typography variant="body2" textAlign="center" mt={2}>
                No items in cart
              </Typography>
            )}
          </List>
        </Box>
      </Grid>
    </Container>
  );
};

export default ProductCart;
