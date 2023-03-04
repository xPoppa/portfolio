import { VStack } from "@chakra-ui/react";
import Introduction from "./Introduction";
import Navbar from "../shared/Navbar";
import Skills from "./Skills";
import CareerFiller from "./CareerFiller";
import Footer from "../shared/Footer";

const HeroContainerAbout = () => {
  return (
    <VStack justify={"center"} align={"center"} spacing="3em">
      <Navbar />
      <Introduction />
      <Skills />
      <CareerFiller />
      <Footer />
    </VStack>
  );
};

export default HeroContainerAbout;
