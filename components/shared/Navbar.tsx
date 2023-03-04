import {
  Button,
  Flex,
  HStack,
  Image,
  Spacer,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const IconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true,
};

const Navbar = () => {
  const [display, setDisplay] = useState("none");
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex>
      <Flex
        as="header"
        bg="transparent"
        w={{ base: "99vw", lg: "55em", xl: "55em" }}
        display={{
          base: "none",
          sm: "flex",
          md: "flex",
          lg: "flex",
          xl: "flex",
        }}
      >
        <HStack h="16" align="center" justify={"center"}>
          <Image
            alt="oops no image"
            src="Me.svg"
            w="65px"
            h="65px"
            borderRadius={"31em"}
          ></Image>
          <NextLink href="/" passHref>
            <Button
              as="a"
              aria-label="about"
              variant={"ghost"}
              fontSize="1em"
              fontWeight={100}
            >
              About
            </Button>
          </NextLink>
          <NextLink href="/opensource" passHref>
            <Button
              as="a"
              aria-label="opensource"
              variant={"ghost"}
              fontSize="1em"
              fontWeight={100}
            >
              Open Source
            </Button>
          </NextLink>
          {/* <NextLink href="/projects" passHref>
					<Button
						as="a"
						aria-label="projects"
						variant={"ghost"}
						fontSize="16px"
						fontWeight={100}
					>
						Projects
					</Button>
				</NextLink> */}
        </HStack>
        <Spacer />
        <IconButton
          aria-label="colorMode-button"
          onClick={toggleColorMode}
          icon={
            colorMode === "light" ? <MdDarkMode /> : <MdLightMode />
          }
          {...IconProps}
        ></IconButton>
      </Flex>
      <IconButton
        aria-label="Open Menu"
        size="lg"
        mr={2}
        icon={<HamburgerIcon />}
        onClick={() => setDisplay("flex")}
        display={{
          base: "flex",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "none",
        }}
      />
      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        h="100vh"
        overflowY="auto"
        flexDir="column"
      >
        <IconButton
          mt={2}
          mr={2}
          aria-label="Open Menu"
          size="lg"
          icon={<CloseIcon />}
          onClick={() => setDisplay("none")}
        />
        <NextLink href="/" passHref>
          <Button
            as="a"
            aria-label="about"
            variant={"ghost"}
            fontSize="16px"
            fontWeight={100}
          >
            About
          </Button>
        </NextLink>
        <NextLink href="/opensource" passHref>
          <Button
            as="a"
            aria-label="opensource"
            variant={"ghost"}
            fontSize="16px"
            fontWeight={100}
          >
            Open Source
          </Button>
        </NextLink>
        <IconButton
          aria-label="colorMode-button"
          onClick={toggleColorMode}
          icon={
            colorMode === "light" ? <MdDarkMode /> : <MdLightMode />
          }
          {...IconProps}
        ></IconButton>
      </Flex>
    </Flex>
  );
};

export default Navbar;
