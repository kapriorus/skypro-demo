import { FC } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { TProduct } from "../types";

type TProductCard = {
  readonly item: TProduct;
  readonly addToCart: (id: number) => void;
};

const ProductComponent: FC<TProductCard> = function ({ item, addToCart }) {
  return (
    <Card variant="outlined">
      <CardMedia sx={{ height: 140 }} image={item.thumbnail} title={item.title}>
        <Button onClick={() => addToCart(item.id)}>
          <ShoppingBasketIcon />
        </Button>
        <Button>
          <FavoriteBorderIcon />
        </Button>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>

        <Typography gutterBottom variant="h5" component="div">
          {item.price}$
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductComponent;
