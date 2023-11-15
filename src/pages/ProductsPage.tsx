import { FC, memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { TCart, TState, TProduct } from "../types";
import ProductComponent from "../components/ProductComponent";

const ProductsPage: FC = memo(function ProductsPage() {
  useDocumentTitle("Список товаров");

  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const products = useSelector((state: TState) => state.products.list);

  const addToCart = (id: number) => {
    let cart: TCart = {};
    const currentCart = localStorage.getItem("cart");
    if (currentCart) {
      cart = JSON.parse(currentCart);
    }
    cart[id] = ++cart[id] || 1;
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const changeProductSorting = (newValue: string | number) => {
    if (newValue === "asc" || newValue === "desc") {
      setSort(newValue);
    }
  };

  const currentProductList: TProduct[] = useMemo(() => {
    if (!products.length) return [];
    let newList = [...products];
    newList = newList.sort((a, b) => {
      if (sort === "asc") {
        return b.id + a.id;
      } else {
        return b.id - a.id;
      }
    });
    return newList;
  }, [products, sort]);

  return (
    <>
      <Box display="flex" justifyContent="right">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="sorting">Порядок</InputLabel>
          <Select
            labelId="sorting"
            value={sort}
            label="Порядок"
            onChange={(el) => changeProductSorting(el.target.value)}
          >
            <MenuItem value="asc">Сперва новые</MenuItem>
            <MenuItem value="desc">Сперва старые</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={2}>
        {currentProductList.map((item: TProduct) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <ProductComponent item={item} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </>
  );
});

export default ProductsPage;
