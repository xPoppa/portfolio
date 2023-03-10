import NextLink from "next/link";
import {
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

const CareerFiller = (): JSX.Element => {
  return (
    <HStack
      align="start"
      justify={"center"}
      w={{ base: "70vw", lg: "44em" }}
      _hover={{ boxShadow: "base", rounded: "md" }}
    >
      <Image
        src={"Me.svg"}
        alt="oops no image"
        w="4em"
        h="4em"
        borderRadius={"31em"}
      />
      <VStack align="start" pt="1em">
        <Text fontSize="1em">
          If you want to see my recent OpenSource projects click{" "}
          <NextLink href="/opensource" passHref>
            <Text as="a" fontWeight={"bold"}>
              here
            </Text>
          </NextLink>
        </Text>
      </VStack>
      <Spacer />
    </HStack>
  );
};

export default CareerFiller;
