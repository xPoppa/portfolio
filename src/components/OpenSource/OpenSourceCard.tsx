import {
  Box,
  Heading,
  HStack,
  Spacer,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  GoMarkGithub,
  GoStar,
  GoRepoForked,
  GoRepo,
} from "react-icons/go";
import { useEffect, useState } from "react";
interface Props {
  title: string;
  repoName: string;
  description: string;
  techStack: string[];
  website: string;
}

const OpenSourceCard = (props: Props): JSX.Element => {
  const [stars, setStars] = useState(0);
  const [forks, setForks] = useState(0);

  const techStack = props.techStack.map((tech, idx) => {
    return (
      <Text key={idx} fontSize={"0.75em"} fontWeight="bold">
        {tech}
      </Text>
    );
  });

  useEffect(() => {
    const getStarsForks = async (): Promise<void> => {
      const response = await fetch(
        `https://api.github.com/repos/xPoppa/${props.repoName}` //portfolio is prop
      );
      const _data = await response.json();
      const { stargazers_count, forks } = _data;
      setStars(stargazers_count);
      setForks(forks);
    };

    getStarsForks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <VStack
      align="start"
      _hover={{ boxShadow: "base", rounded: "md" }}
      p="6"
      w={{ base: "70vw", lg: "44em" }}
    >
      <HStack w={{ base: "60vw", lg: "42em" }}>
        <GoRepo />
        <Heading fontSize="1.5rem">{props.title}</Heading>
        <Spacer />
        <Tooltip label="click" fontSize={"sm"} bg="Grey.200">
          <Box
            as="a"
            href={props.website}
            target="_blank"
            rel="noopener noreferrer"
            // https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
          >
            <ExternalLinkIcon />
          </Box>
        </Tooltip>

        <GoMarkGithub />
      </HStack>
      <Text fontSize="1rem">{props.description}</Text>
      <HStack spacing={1}>
        {techStack}
        <GoStar />
        <Text fontSize={"0.75em"} fontWeight="bold">
          {stars}
        </Text>
        <GoRepoForked />
        <Text fontSize={"0.75em"} fontWeight="bold">
          {forks}
        </Text>
      </HStack>
    </VStack>
  );
};

export default OpenSourceCard;
