import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <Typography sx={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
      {t("copyright")}
    </Typography>
  );
};

export default Footer;
