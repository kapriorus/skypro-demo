import { FC } from "react";
import {
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

type TCartProductComponent = {
  readonly totalSum: number;
};

const CartCheckoutComponent: FC<TCartProductComponent> = function ({
  totalSum,
}) {
  return (
    <Paper style={{ padding: "20px" }}>
      <FormControl fullWidth>
        <Typography align="center" variant="h6">
          <b>Оформление заказа</b>
        </Typography>
      </FormControl>
      <FormControl fullWidth>
        <TextField label="Фамилия Имя" variant="standard" />
      </FormControl>
      <FormControl fullWidth>
        <TextField label="Телефон" variant="standard" />
      </FormControl>
      <FormControl fullWidth>
        <TextField label="Адрес доставки" variant="standard" />
      </FormControl>
      <FormControl fullWidth>
        <Typography align="center" variant="body1" style={{ margin: "15px 0" }}>
          Итого: <b>{totalSum}$</b>
        </Typography>
      </FormControl>
      <FormControl fullWidth>
        <Button disabled={totalSum === 0}>Оформить заказ</Button>
      </FormControl>
    </Paper>
  );
};

export default CartCheckoutComponent;
