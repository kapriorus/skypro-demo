import { FC, memo } from "react";

import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";

const Header: FC = memo(function Header() {
  return (
    <AppBar position="static" style={{ marginBottom: "15px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            Товары
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button href="/" sx={{ color: "#fff" }}>
              Каталог
            </Button>
            <Button href="/cart" sx={{ color: "#fff" }}>
              Корзина
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
});

export default Header;
