import {
  HStack,
  IconButton,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import data from "../../../Data/socialLinkData";

const Footer = () => {
  const iconProps = {
    variant: "ghost",
    size: "md",
    isRound: true,
  };
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      as="footer"
      w={{ base: "70vw", lg: "44em" }}
    >
      <Text>© {new Date().getFullYear()} Romano Lynch</Text>
      <Spacer />
      <HStack>
        {data.map((tech, idx) => {
          return (
            <IconButton
              as={Link}
              key={idx}
              aria-label={tech.label}
              icon={tech.icon}
              href={tech.url}
              {...iconProps}
            />
          );
        })}
      </HStack>
    </Stack>
  );
};

export default Footer;
