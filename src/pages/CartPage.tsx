import { FC, memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { Box, Grid } from "@mui/material";
import CartProductComponent from "../components/CartProductComponent";
import { TCart, TState } from "../types";
import CartCheckoutComponent from "../components/CartCheckoutComponent";

const CartPage: FC = memo(function CartPage() {
  useDocumentTitle("Корзина");

  const [cart, setCart] = useState<TCart | undefined>(undefined);
  const [totalSum, setTotalSum] = useState(0);
  const products = useSelector((state: TState) => state.products.list);

  const changeProductCount = (value: number, id: number) => {
    const cartStorage: TCart = JSON.parse(localStorage.getItem("cart")!);

    if (value > 0) {
      cartStorage[id] = value;
    } else {
      delete cartStorage[id];
    }

    setCart(cartStorage);
    localStorage.setItem("cart", JSON.stringify(cartStorage));
  };

  useEffect(() => {
    if (localStorage.getItem("cart") && products && products.length) {
      setCart(JSON.parse(localStorage.getItem("cart")!));
    }
  }, [products]);

  useEffect(() => {
    if (!cart) return;
    setTotalSum(0);
    Object.keys(cart).forEach((id) => {
      const count = cart[Number(id)];
      const product = products.find((item) => item.id === Number(id))!;
      setTotalSum((prev: number) => prev + count * product.price);
    });
  }, [products, cart]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        {!cart || !Object.keys(cart).length ? (
          <Box display="flex" justifyContent="center">
            В корзине нет товаров
          </Box>
        ) : (
          <>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                Товар
              </Grid>
              <Grid item xs={2}>
                К-во
              </Grid>
            </Grid>

            {cart &&
              Object.keys(cart).map((id) => {
                console.log(cart, id, cart[Number(id)]);
                return (
                  <CartProductComponent
                    key={id}
                    item={products.find((item) => item.id === Number(id))!}
                    count={Number(cart[Number(id)])}
                    max={10}
                    onChange={(value) => changeProductCount(value, Number(id))}
                  />
                );
              })}
          </>
        )}
      </Grid>

      <Grid item xs={12} md={4}>
        <CartCheckoutComponent totalSum={totalSum} />
      </Grid>
    </Grid>
  );
});

export default CartPage;
