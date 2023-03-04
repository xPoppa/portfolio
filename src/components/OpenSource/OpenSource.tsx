import { Heading, Text, VStack } from "@chakra-ui/react";
import OpenSourceCard from "./OpenSourceCard";
import data from "../../../Data/openSourceData";

const OpenSource = () => {
  const repoCards = data.map((data, idx) => {
    return (
      <OpenSourceCard
        key={idx + 20}
        title={data.title}
        repoName={data.repoName}
        description={data.description}
        techStack={data.techStack}
        website={data.website}
      />
    );
  });

  return (
    <VStack
      align="start"
      spacing="2em"
      w={{ base: "70vw", lg: "44em" }}
    >
      <Heading>Open Source</Heading>
      <Text>
        This Page lists some of the opensource repositories I have
        published
      </Text>
      {repoCards}
    </VStack>
  );
};

export default OpenSource;
