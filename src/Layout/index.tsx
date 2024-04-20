import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const Layout = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Box minHeight="90vh" mt={10}>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;