import { VStack } from "@chakra-ui/react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import OpenSource from "./OpenSource";

const HeroContainerOpenSource = () => {
  return (
    <VStack justify={"center"} spacing="3em">
      <Navbar />
      <OpenSource />
      <Footer />
    </VStack>
  );
};

export default HeroContainerOpenSource;
