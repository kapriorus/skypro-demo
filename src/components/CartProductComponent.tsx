import { FC } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  FormControl,
  Grid,
  Typography,
} from "@mui/material";
import { TProduct } from "../types";

type TCartProductComponent = {
  readonly item: TProduct;
  readonly count: number;
  readonly min?: number;
  readonly max?: number;
  readonly onChange: (newValue: number) => void;
};

const CartProductComponent: FC<TCartProductComponent> = function ({
  item,
  count,
  min = 1,
  max = 9999999999,
  onChange,
}) {
  return (
    <>
      <Divider style={{ margin: "10px 0" }} />
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Box sx={{ display: "flex" }}>
              <CardMedia
                sx={{ width: 150 }}
                component="img"
                image={item.thumbnail}
                title={item.title}
                style={{ marginRight: "15px" }}
              />
              <Box>
                <b>{item.title}</b>
                <div>
                  <Typography variant="caption">{item.description}</Typography>
                </div>
                {item.price}$
                <div>
                  <Button>Избранное</Button>
                  <Button onClick={() => onChange(0)}>Удалить</Button>
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid alignItems="center" display="flex" item xs={2}>
            <FormControl fullWidth>
              <input
                type="number"
                value={count}
                min={min}
                max={max}
                onChange={(el) => onChange(Number(el.target.value))}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default CartProductComponent;
