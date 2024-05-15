"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { store } from "@/redux/store";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

const Layout = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <Provider store={store}>
      <>
        <Header />
        <Box minHeight="90vh" mt={10}>
          {children}
        </Box>
        <Footer />
      </>
    </Provider>
  );
};

export default Layout;
