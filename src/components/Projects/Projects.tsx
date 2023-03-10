import { Heading, Text, VStack } from "@chakra-ui/react";
import data from "../../../Data/careerData";
import ProjectCard from "./ProjectsCard";

const Projects = (): JSX.Element => {
  const _ProjectsCards = data.map((_, idx) => {
    return <ProjectCard key={idx + 20} />;
  });

  return (
    <VStack>
      <Heading>Projects</Heading>
      <Text>I have not worked on Projects yet.</Text>
      {_ProjectsCards}
    </VStack>
  );
};

export default Projects;
