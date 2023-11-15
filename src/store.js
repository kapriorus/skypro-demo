import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./features/products";

export default configureStore({
  reducer: {
    products: productsSlice,
  },
});
