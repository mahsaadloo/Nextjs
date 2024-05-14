"use client";
import { useTranslations } from "next-intl";
import React from "react";
import LocalSwitcher from "./LocalSwitcher";
import { AppBar, Box, IconButton, Stack, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/navigation";
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const Navbar = () => {
  const { push } = useRouter();
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
            <div>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => {
                  push("/");
                }}
              >
                <HomeIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => {
                  push("/en/create");
                }}
              >
                <NoteAddIcon />
              </IconButton>
            </div>
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
