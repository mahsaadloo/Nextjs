import { Box } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <>
      <Box sx={{ display: "flex", marginTop: 2, justifyContent: "center" }}>
        {t("title")}
      </Box>
    </>
  );
}
