import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import LocalSwitcher from "./LocalSwitcher";
import { Box } from "@mui/material";

const Navbar = () => {
  const t = useTranslations("Navigation");
  return (
    <>
      <Box
        sx={{
          marginTop: 5,
          marginLeft: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/">{t("home")}</Link>
        <LocalSwitcher />
      </Box>
    </>
  );
};

export default Navbar;
