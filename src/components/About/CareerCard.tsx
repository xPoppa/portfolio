import {
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Props {
  company: string;
  jobTitle: string;
  techStack: string[];
  date: string;
  picture: string;
}

const CareerCard = (props: Props): JSX.Element => {
  const techStack = props.techStack.map((tech, idx) => {
    return <Text key={idx + 200}>{tech}</Text>;
  });

  return (
    <HStack
      align="start"
      w={{ base: "70vw", lg: "44em" }}
      _hover={{ boxShadow: "base", rounded: "md" }}
    >
      <Image
        src={props.picture}
        alt="oops no image"
        w="4em"
        h="4em"
        borderRadius={"31em"}
      />
      <VStack align="start">
        <Heading fontSize={"1.5em"}>{props.company}</Heading>
        <Text fontSize="1em">{props.jobTitle}</Text>
        {techStack}
      </VStack>
      <Spacer />
      <Text>{props.date}</Text>
    </HStack>
  );
};

export default CareerCard;
