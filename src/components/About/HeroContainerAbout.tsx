import { VStack } from "@chakra-ui/react";
import Introduction from "./Introduction";
import Skills from "./Skills";
import CareerFiller from "./CareerFiller";

const HeroContainerAbout = (): JSX.Element => {
  return (
    <VStack justify={"center"} align={"center"} spacing="3em">
      <Introduction />
      <Skills />
      <CareerFiller />
    </VStack>
  );
};

export default HeroContainerAbout;
