import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import HeroContainerAbout from "../src/components/About/HeroContainerAbout";

const Home: NextPage = () => {
  return (
    <Flex justify="center">
      <HeroContainerAbout />
    </Flex>
  );
};

export default Home;
