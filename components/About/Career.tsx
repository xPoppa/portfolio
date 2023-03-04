import { Heading, VStack } from "@chakra-ui/react";
import CareerCard from "./CareerCard";
import data from "../../Data/careerData";

const Career = () => {
  const _CareerCards = data.map((project, idx) => {
    return (
      <CareerCard
        key={idx + 20}
        company={project.company}
        jobTitle={project.jobTitle}
        techStack={project.techStack}
        date={project.date}
        picture={project.img}
      />
    );
  });

  return (
    <VStack w={{ base: "70vw", lg: "44em" }} align="start" mt="3em">
      <Heading mb="1.5em">Career</Heading>
      {_CareerCards}
    </VStack>
  );
};

export default Career;
