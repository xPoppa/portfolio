import { Heading, Text, VStack } from "@chakra-ui/react";

const Skills = (): JSX.Element => {
  return (
    <VStack align="start" w={{ base: "70vw", lg: "700px" }}>
      <Heading>Skills</Heading>
      <VStack
        align="start"
        w={{ base: "70vw", lg: "700px" }}
        _hover={{ boxShadow: "base", rounded: "md" }}
        borderLeft="2px"
        borderLeftColor={"blue.400"}
        borderRadius="md"
      >
        <Text>Typescript, Javascript, Python, React</Text>
      </VStack>
    </VStack>
  );
};
export default Skills;
