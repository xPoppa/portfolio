import { VStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Navbar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <VStack gap={"10vh"}>
      <Header />
      <main>{children}</main>
      <Footer />
    </VStack>
  );
};

export default Layout;
