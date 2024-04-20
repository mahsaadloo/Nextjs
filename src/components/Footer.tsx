import { Box, Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <Box component="footer" height={60} sx={{ bgcolor: "grey", width: "100%" }}>
      <Stack justifyContent="center" width="100%" height="100%" alignItems="center">
        <Typography align="center">
          {t("copyright")}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
