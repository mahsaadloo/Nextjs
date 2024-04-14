import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box, Typography } from "@mui/material";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        <>
          <Header />
          <Box>{children}</Box>
          <Footer />
        </>
      </body>
    </html>
  );
}
