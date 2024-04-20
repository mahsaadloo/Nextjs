"use client";
import { useTranslations } from "next-intl";
import React from "react";
import LocalSwitcher from "./LocalSwitcher";
import { AppBar, Box, IconButton, Stack, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const t = useTranslations("Navigation");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                router.push("/");
              }}
            >
              <HomeIcon />
            </IconButton>
            <div>
              <LocalSwitcher />
            </div>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
